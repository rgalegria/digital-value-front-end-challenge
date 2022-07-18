import React from "react";
import ActionBtn from "../../../../components/Buttons/ActionBtn/ActionBtn";

// Styles
import styles from "./SpanFilterBtns.module.css";

const SpanFilterBtns = ({ onClick, activeBtn }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ActionBtn id="12" text="1Y" onClick={onClick} activeBtn={activeBtn} />
                <ActionBtn id="24" text="2Y" onClick={onClick} activeBtn={activeBtn} />
                <ActionBtn id="36" text="3Y" onClick={onClick} activeBtn={activeBtn} />
            </div>
        </div>
    );
};

export default SpanFilterBtns;
