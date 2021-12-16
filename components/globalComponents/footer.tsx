import footerStyles from '../../styles/footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer id={footerStyles.footer}>
            <h2>&copy; 2021 Joshua Seligman. All rights reserved.</h2>
        </footer>
    );
};

export default Footer;