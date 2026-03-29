import styles from './Header.module.css';

function Header() {
	return (
        <img
            className={styles.logo}
            src='/Personal Journal.svg'
            alt='Логотип'
        />
	);
}

export default Header;