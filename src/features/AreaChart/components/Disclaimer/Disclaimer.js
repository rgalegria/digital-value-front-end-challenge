import React from "react";

// Styles
import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Dns Ins * : Données Insufisants pour calculer le pourcentage de variation. Le calcul du pourcentage de
                variation se fait année sur année (YoY) sur la date visualisée.
            </p>
            {/* <p className={styles.text}></p> */}
        </div>
    );
};

export default Disclaimer;
