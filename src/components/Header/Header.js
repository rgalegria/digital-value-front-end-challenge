import React from "react";

// Styles
import companyLogo from "../../assets/img/logo.svg";

// Styles
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src={companyLogo} alt="Digital Value logo" />
            </div>
        </header>
    );
};

export default Header;
