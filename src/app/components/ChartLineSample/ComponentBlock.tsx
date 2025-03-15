"use client";

import { mdiChartPie, mdiReload } from "@mdi/js";
import { useState } from "react";
import ChartLineSample from ".";
import BaseButton from "../BaseButton";
import CardBox from "../CardBox";
import SectionTitleLineWithButton from '../Section/SectionTitleLineWithButton';
import { sampleChartData } from "./config";

export default function ChartLineSampleComponentBlock() {
    const [ chartData, setChartData ] = useState(sampleChartData());
    
    const fillChartData = (e: React.MouseEvent ) => {
        e.preventDefault();

        setChartData(sampleChartData())
    };

    return (
        <>
            <SectionTitleLineWithButton icon={mdiChartPie} title="Trends overview" >
                <BaseButton icon={mdiReload} color="whiteDark" onClick={fillChartData} /> 
            </SectionTitleLineWithButton>
        
            <CardBox className="mb-6">
                {chartData && <ChartLineSample data={chartData} />}
            </CardBox>
        </>
    );
}


