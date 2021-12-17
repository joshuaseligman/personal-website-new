import Link from 'next/link';

import navbarStyles from '../../styles/navbar.module.scss';

/**
 * React component for the navbar
 * @returns The JSX for the navbar of the app
 */
const Navbar: React.FC = () => {
    return (
        // Navbar container
        <nav id={navbarStyles.navbar}>
            {/* Div to hold my name apart from the other links */}
            <div id={navbarStyles.name}>
                <Link href='/'>
                    <a className={navbarStyles.navLink}>Joshua Seligman</a>
                </Link>
            </div>
            {/* Div for the ramining links */}
            <div id={navbarStyles.links}>
                <Link href='/about'>
                    <a className={navbarStyles.navLink}>About</a>
                </Link>
                <Link href='/projects'>
                    <a className={navbarStyles.navLink}>Projects</a>
                </Link>
                <Link href='/resume'>
                    <a className={navbarStyles.navLink}>Resume</a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;