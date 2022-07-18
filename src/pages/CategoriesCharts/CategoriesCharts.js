import React from "react";

// Components
import AreaChartCont from "../../features/AreaChart/containers/AreaChartCont/AreaChartCont";

// Styles
import styles from "./CategoriesCharts.module.css";

const CategoriesCharts = () => {
    return (
        <div className={styles.container}>
            <AreaChartCont />
        </div>
    );
};

export default CategoriesCharts;
