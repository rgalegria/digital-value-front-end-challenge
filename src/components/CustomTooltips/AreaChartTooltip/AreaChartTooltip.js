import React from "react";
import { format, parseISO } from "date-fns";

// Styles
import styles from "./AreaChartTooltip.module.css";

const AreaChartTooltip = ({ active, payload, label }) => {
    if (active) {
        const formatedValue = new Intl.NumberFormat("en-US", {
            style: "decimal",
            signDisplay: "never"
        }).format(payload[0].value);
        return (
            <div className={styles.tooltip}>
                <div className={styles.wrapper}>
                    <p className={styles.date}>{format(parseISO(label), "MMM-yyyy")}</p>
                    <p className={styles.text}>{formatedValue}</p>
                </div>
            </div>
        );
    }
    return null;
};

export default AreaChartTooltip;
