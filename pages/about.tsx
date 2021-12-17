import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import aboutStyles from '../styles/aboutStyles.module.scss';

/**
 * The page that is shown when the route is '/about'
 * @returns The JSX component for the about page
 */
const About: NextPage = () => {
    return (
        <div>
            <PageTitle title='About Me'></PageTitle>
        </div>
    );
};

export default About;