import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import projectStyles from '../styles/project.module.scss';

/**
 * The page that is shown when the route is '/projects'
 * @returns The JSX component for the projects page
 */
const Projects: NextPage = () => {
    return (
        <div>
            <PageTitle title='Featured Projects'></PageTitle>
        </div>
    );
};

export default Projects;