import React from "react";

// Styles
import styles from "./ActionBtn.module.css";

const ActionBtn = ({ id, text, onClick, activeBtn, btnStyles }) => {
    let active = false;
    if (parseInt(id, 10) === activeBtn) active = true;
    return (
        <button id={id} className={btnStyles ? btnStyles : styles.btn} type="button" onClick={onClick}>
            <div className={`${styles.wrapper} ${active ? styles.active_underline : null}`}>
                <span className={active ? styles.active : styles.text}>{text}</span>
            </div>
        </button>
    );
};

export default ActionBtn;
