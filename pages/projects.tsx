import type { NextPage } from 'next';
import Link from 'next/link';

import PageTitle from '../components/globalComponents/pageTitle';
import Project from '../components/projectComponents/project';

import globalStyles from '../styles/global.module.scss';
import projectStyles from '../styles/projects.module.scss';

interface ProjectInterface {
    projectName: string,
    projectDescription: string,
    topics: string[],
    localPathToImg: string,
    projectURL: string
}

interface Props {
    projectsData: ProjectInterface[];
}

/**
 * The page that is shown when the route is '/projects'
 * @returns The JSX component for the projects page
 */
const Projects: NextPage<Props> = ({ projectsData }) => {

    return (
        <div className={globalStyles.page}>
            <PageTitle title='My Projects'></PageTitle>
            <p className={projectStyles.slideUpClass}>
                Here are a few of my featured projects. To view all of my past projects, feel free to check out my&nbsp;
                <Link href='https://www.github.com/joshuaseligman'><a id={projectStyles.githubLink} target='_blank'>GitHub profile</a></Link>.
            </p>

            <div id={projectStyles.projectsArea}>
                {projectsData.map((project) => {
                    return (
                        <Project project={project}></Project>
                    );
                })}
            </div>
        </div>
    );
};

Projects.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/projects');
    const data = await res.json();
    return { projectsData: data.data} ;
}

export default Projects;