import React from "react";
import ActionBtn from "../../../../components/Buttons/ActionBtn/ActionBtn";

// Styles
import styles from "./SpanFilterBtns.module.css";

const SpanFilterBtns = ({ onClick, activeSpanFilter }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Categories</h2>
            <div className={styles.wrapper}>
                <ActionBtn id="12" text="1Y" onClick={onClick} activeBtn={activeSpanFilter} btnStyles={styles.btn} />
                <ActionBtn id="24" text="2Y" onClick={onClick} activeBtn={activeSpanFilter} btnStyles={styles.btn} />
                <ActionBtn id="36" text="3Y" onClick={onClick} activeBtn={activeSpanFilter} btnStyles={styles.btn} />
            </div>
        </div>
    );
};

export default SpanFilterBtns;
