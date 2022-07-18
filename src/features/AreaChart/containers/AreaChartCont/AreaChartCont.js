import React, { useState, useEffect } from "react";
import { useAxios } from "../../../../hooks/useAxios-hook";
import { sortArray, filterByMonthSpan } from "../../../../utils/helperFunctions";

// Components
import SpanFilterBtns from "../../components/SpanFilterBtns/SpanFilterBtns";
import AreaChartComp from "../../../../components/AreaChartComp/AreaChartComp";

// Styles
import styles from "./AreaChartCont.module.css";

const AreaChartCont = () => {
    // HTTP Axios request hook
    const { goAxios } = useAxios();

    /**
     * Container STATES
     * ========================================== */

    // Global data
    const [globalData, setGlobalData] = useState();

    // Chart data
    const [chartData, setChartData] = useState();

    // Data Span filter (number) in number of months
    const [activeSpanFilter, setActiveSpanFilter] = useState(24);

    // Initial Fetch
    useEffect(() => {
        const inititalfetch = async () => {
            const data = sortArray(await goAxios("./api/volumes/250162.json"), "ASC");

            // Set global data
            setGlobalData(data);

            // Filter Global data by number of months and set data
            setChartData(filterByMonthSpan(data, 24));
        };
        inititalfetch();
    }, []);

    const filterByRangeHandler = (event) => {
        event.preventDefault();

        // Parse btn id
        const value = parseInt(event.currentTarget.id, 10);
        if (activeSpanFilter === value) return;

        // Filter Global data by number of months and set data
        setChartData(filterByMonthSpan(globalData, value));

        // Set active span filter
        setActiveSpanFilter(value);
    };

    return (
        <div className={styles.container}>
            {globalData && chartData && (
                <>
                    <SpanFilterBtns activeBtn={activeSpanFilter} onClick={filterByRangeHandler} />
                    <AreaChartComp data={chartData} />
                </>
            )}
        </div>
    );
};

export default AreaChartCont;
