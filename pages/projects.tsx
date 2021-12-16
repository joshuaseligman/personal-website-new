import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import projectStyles from '../styles/project.module.scss';

const Projects: NextPage = () => {
    return (
        <div>
            <PageTitle title='Featured Projects'></PageTitle>
        </div>
    );
};

export default Projects;