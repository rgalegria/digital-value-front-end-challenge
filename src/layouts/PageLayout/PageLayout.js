import React from "react";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Styles
import styles from "./PageLayout.module.css";

const PageLayout = (props) => {
    return (
        <>
            <Header />
            <article className={styles.container}>{props.children}</article>
            <Footer />
        </>
    );
};

export default PageLayout;
