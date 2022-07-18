import React from "react";
import { format, parseISO, sub } from "date-fns";
import { findByProperty, calAvgPercentage } from "../../../utils/helperFunctions";

// Styles
import styles from "./AreaChartTooltip.module.css";

const AreaChartTooltip = ({ active, payload, label, globalData }) => {
    if (active) {
        // Obtain -1 year date from graph date
        const date = format(sub(new Date(payload[0].payload.date), { years: 1 }), "yyy-MM-dd");

        // Find data in global data state
        const compareObj = findByProperty(date, globalData, "date");

        // Calculate Average Percentage. If NaN, show insufficient data label
        const value = payload[0].value;
        const avgPercentage = compareObj ? calAvgPercentage(value, compareObj.volume) + " %" : "Dns Ins *";

        // Format date from chart data
        const formatedValue = new Intl.NumberFormat("en-US", {
            style: "decimal",
            signDisplay: "never"
        }).format(value);

        return (
            <div className={styles.tooltip}>
                <div className={styles.wrapper}>
                    <p className={styles.date}>{format(parseISO(label), "MMM-yyyy")}</p>
                    <p className={styles.text}>
                        Recherches : <span className={styles.value}>{`${formatedValue}`}</span>
                    </p>
                    <p className={styles.text}>
                        Variation : <span className={styles.percentage}>{avgPercentage}</span>
                    </p>
                </div>
            </div>
        );
    }
    return null;
};

export default AreaChartTooltip;
