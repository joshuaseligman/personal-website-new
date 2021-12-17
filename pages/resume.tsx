import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import resumeStyles from '../styles/resume.module.scss';

/**
 * The page that is shown when the route is '/resume'
 * @returns The JSX component for the resume page
 */
const Resume: NextPage = () => {
    return (
        <div>
            <PageTitle title='My Resume'></PageTitle>
        </div>
    );
};

export default Resume;