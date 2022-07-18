import React, { useState, useEffect } from "react";
import { useAxios } from "../../../../hooks/useAxios-hook";
import { sortArray, filterByMonthSpan, findByProperty } from "../../../../utils/helperFunctions";

// Components
import SpanFilterBtns from "../../components/SpanFilterBtns/SpanFilterBtns";
import AreaChartComp from "../../../../components/AreaChartComp/AreaChartComp";
import CategoriesBtns from "../../components/CategoriesBtns/CategoriesBtns";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

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

    // Stored Categories
    const [categories, setCategories] = useState();

    // Data Span filter (number) in number of months
    const [activeSpanFilter, setActiveSpanFilter] = useState(24);

    // Active category filter
    const [activeCategory, setActiveCategory] = useState();

    // Initial Fetch
    useEffect(() => {
        const inititalfetch = async () => {
            // Fetch Categories
            const categories = await goAxios("./api/categories.json");

            // Search initial category id
            const id = parseInt(findByProperty("Products", categories, "name").id, 10);

            // Fetch category data by id and sort array by ASC date
            const data = sortArray(await goAxios(`./api/volumes/${id}.json`), "ASC");

            // Set states
            setGlobalData([{ id, data }]); // Obj array
            setChartData(filterByMonthSpan(data, 24)); // Filter by number of months
            setCategories(categories);
            setActiveCategory(id);
        };
        inititalfetch();
    }, []);

    const filterByRangeHandler = async (event) => {
        event.preventDefault();

        // Parse btn id
        const value = parseInt(event.currentTarget.id, 10);
        if (activeSpanFilter === value) return;

        // Find chosen Category data
        const foundCategory = await findByProperty(activeCategory, globalData, "id");

        // Filter and set data
        setChartData(filterByMonthSpan(foundCategory.data, value));

        // Set active span filter
        setActiveSpanFilter(value);
    };

    const filterByCategoryHandler = async (event) => {
        event.preventDefault();

        // Parse btn id
        const id = parseInt(event.currentTarget.id, 10);
        if (activeCategory === id) return;

        // Search for specified category
        const foundCategory = await findByProperty(id, globalData, "id");

        // Search for already fetched data, else fetch new data.
        if (foundCategory) setChartData(foundCategory.data);
        else {
            const newCategoryData = sortArray(await goAxios(`./api/volumes/${id}.json`), "ASC");

            // Push new data to globalState
            setGlobalData((prevData) => {
                let newArr = [...prevData];
                newArr.push({ id, data: newCategoryData });
                return newArr;
            });

            // Set chart data to be vizualized
            setChartData(filterByMonthSpan(newCategoryData, activeSpanFilter));
        }

        // Set current visualized category
        setActiveCategory(id);
    };

    return (
        <>
            {globalData && categories && chartData && (
                <div className={styles.container}>
                    <SpanFilterBtns activeSpanFilter={activeSpanFilter} onClick={filterByRangeHandler} />
                    <div className={styles.wrapper}>
                        <CategoriesBtns
                            categoryList={categories}
                            activeBtn={activeCategory}
                            onClick={filterByCategoryHandler}
                        />
                        <AreaChartComp
                            data={chartData}
                            globalData={findByProperty(activeCategory, globalData, "id").data}
                        />
                    </div>
                    <Disclaimer />
                </div>
            )}
        </>
    );
};

export default AreaChartCont;
