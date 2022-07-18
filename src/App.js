import React from "react";

// Components
import PageLayout from "./layouts/PageLayout/PageLayout";
import CategoriesCharts from "./pages/CategoriesCharts/CategoriesCharts";

// Styles
import "./App.css";

const App = () => {
    return (
        <PageLayout>
            <CategoriesCharts />
        </PageLayout>
    );
};

export default App;
