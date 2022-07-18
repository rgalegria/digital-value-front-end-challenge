import React from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts";
import { format, parseISO } from "date-fns";

// Components
import AreaChartTooltip from "../CustomTooltips/AreaChartTooltip/AreaChartTooltip";

// Styles
import styles from "./AreaChartComp.module.css";

const AreaChartComp = ({ data, globalData }) => {
    return (
        <div className={styles.wrapper}>
            <ResponsiveContainer width="100%" height={450}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                            <stop offset="80%" stopColor="#2451B7" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <Area dataKey="volume" stroke="#2451B7" fill="url(#color)" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(str) => {
                            // Format X Axis date labels
                            const date = parseISO(str);
                            const skip = (date.getMonth() + 1) % 2;
                            let string = format(date, "MMM-yy");

                            // Skip one of two steps for labelling
                            if (skip === 0) return string;
                            return "";
                        }}
                    />
                    <YAxis
                        datakey="volume"
                        axisLine={false}
                        tickLine={false}
                        tickCount={6}
                        tickFormatter={(number) => `${number / 1000000} M`}
                    />
                    <Tooltip content={<AreaChartTooltip globalData={globalData} />} />
                    <CartesianGrid opacity={0.1} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChartComp;
