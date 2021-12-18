import footerStyles from '../../styles/footer.module.scss';

/**
 * React component for the footer of the website
 * @returns The JSX component for the footer
 */
const Footer: React.FC = () => {
    return (
        // Container for the footer
        <footer id={footerStyles.footer}>
            <p>&copy; 2021 Joshua Seligman. All rights reserved.</p>
        </footer>
    );
};

export default Footer;