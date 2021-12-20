import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import globalStyles from '../styles/global.module.scss';
import animations from '../styles/animations.module.scss';

/**
 * The page that is shown for a 404 error
 * @returns The JSX component for the 404 page
 */
const Custom404: NextPage = () => {
    return (
        <div className={globalStyles.page}>
            <PageTitle title='404 Error'></PageTitle>
            <p className={animations.slideUp15Class}>Looks like there was a glitch in the Matrix... the page you were looking for was not found.</p>
        </div>
    );
};

export default Custom404;