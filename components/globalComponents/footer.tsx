import Link from 'next/link';
import footerStyles from '../../styles/footer.module.scss';

/**
 * React component for the footer of the website
 * @returns The JSX component for the footer
 */
const Footer: React.FC = () => {
    return (
        // Container for the footer
        <footer id={footerStyles.footer}>
            <div id={footerStyles.copyright}>
                <p>&copy; 2021 Joshua Seligman. All rights reserved.</p>
            </div>
            <div id={footerStyles.logoArea}>
                <Link href='https://www.github.com/joshuaseligman'>
                    <a target='_blank'><img src='/github.png' className={footerStyles.logo}></img></a>
                </Link>
                <Link href='https://www.linkedin.com/in/joshua-seligman-26209321b'>
                    <a target='_blank'><img src='/linkedin.png' className={footerStyles.logo}></img></a>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;