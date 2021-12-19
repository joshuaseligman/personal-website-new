import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import globalStyles from '../styles/global.module.scss';
import resumeStyles from '../styles/resume.module.scss';

/**
 * The page that is shown when the route is '/resume'
 * @returns The JSX component for the resume page
 */
const Resume: NextPage = () => {
    return (
        <div className={globalStyles.page}>
            <PageTitle title='My Resume'></PageTitle>
            <iframe src='/Joshua Seligman Resume.pdf' className={resumeStyles.resume}></iframe>
        </div>
    );
};

export default Resume;