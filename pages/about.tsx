import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import aboutStyles from '../styles/aboutStyles.module.scss';

const About: NextPage = () => {
    return (
        <div>
            <PageTitle title='About Me'></PageTitle>
        </div>
    );
};

export default About;