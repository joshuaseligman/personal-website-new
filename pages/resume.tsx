import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import resumeStyles from '../styles/resume.module.scss';

const Resume: NextPage = () => {
    return (
        <div>
            <PageTitle title='My Resume'></PageTitle>
        </div>
    );
};

export default Resume;