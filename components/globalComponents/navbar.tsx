import Link from 'next/link';

import navbarStyles from '../../styles/navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <nav id={navbarStyles.navbar}>
            <div id={navbarStyles.name}>
                <Link href='/'>
                    <a className={navbarStyles.navLink}>Joshua Seligman</a>
                </Link>
            </div>
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