import Chart from "chart.js/auto";
import React, {useEffect, useRef} from "react";
import {RiskSeverityType} from "types";
import ChartDataLabels from "chartjs-plugin-datalabels";

interface IProps {
    data: number[];
    labels: string[];
    onCallback(severity?: string): void;
}

const PieChart = ({data, labels, onCallback}: IProps) => {
    const pieChartRef = useRef<HTMLCanvasElement>(null);
    let currentSelect: string | null = null;
    let pieChart: Chart;

    useEffect(() => {
        const chartRef = pieChartRef.current?.getContext("2d");

        if (chartRef) {
            Chart.register(ChartDataLabels);
            pieChart = new Chart(chartRef, {
                type: "pie",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Severity",
                            data: data,
                            backgroundColor: labels.map(label => getLabelColor(label)),
                            borderWidth: 2,
                            borderColor: labels.map(() => "white"),
                            // @ts-ignore
                            offset: labels.map(() => 0)
                        }
                    ]
                },
                options: {
                    layout: {
                        padding: 20
                    },
                    plugins: {
                        tooltip: {
                            enabled: false
                        },
                        datalabels: {
                            color: "white",
                            labels: {
                                title: {
                                    font: {
                                        size: 24,
                                        weight: "bold"
                                    },
                                    align: "end"
                                }
                            }
                        },
                        legend: {
                            onClick: (event, activeElement) => {
                                if (activeElement && typeof activeElement.index === "number") {
                                    onSliceClick(0, activeElement.index);
                                }
                            },
                            onHover: (event: any, activeElement) => {
                                if (activeElement) {
                                    event.native.target.style.cursor = "pointer";
                                } else {
                                    event.native.target.style.cursor = "default";
                                }
                            }
                        }
                    },
                    onClick: (event, activeElement) => {
                        if (activeElement.length) {
                            const pieSlice = activeElement[0];
                            onSliceClick(pieSlice.datasetIndex, pieSlice.index);
                        }
                    },
                    onHover: (event: any, activeElement) => {
                        if (activeElement.length) {
                            event.native.target.style.cursor = "pointer";
                        } else {
                            event.native.target.style.cursor = "default";
                        }
                    }
                }
            });
        }

        return () => {
            pieChart.destroy();
        };
    }, [data]);

    return (
        <div className="relative mx-auto my-5 w-[340px] h-[340px] lg:w-[420px] lg:h-[420px]">
            <canvas ref={pieChartRef} />
        </div>
    );

    function getLabelColor(label: string): string {
        switch (label) {
            case RiskSeverityType.CRITICAL:
                return "#dc2626";
            case RiskSeverityType.HIGH:
                return "#fb923c";
            case RiskSeverityType.MEDIUM:
                return "#facc15";
            default:
                return "#16a34a";
        }
    }

    function onSliceClick(datasetIndex: number, index: number) {
        if (currentSelect === labels[index]) {
            // @ts-ignore
            pieChart.data.datasets[datasetIndex].borderColor[index] = "white";
            currentSelect = null;
            pieChart.update();
            onCallback();
        } else {
            pieChart.data.datasets[datasetIndex].borderColor = labels.map(() => "white");
            // @ts-ignore
            pieChart.data.datasets[datasetIndex].borderColor[index] = "black";
            pieChart.update();
            currentSelect = labels[index];
            onCallback(labels[index]);
        }
        // @ts-ignore
        if (pieChart.data.datasets[datasetIndex].offset[index] === 0) {
            // @ts-ignore
            pieChart.data.datasets[datasetIndex].offset = labels.map(() => 0);
            // @ts-ignore
            pieChart.data.datasets[datasetIndex].offset[index] = 40;
            pieChart.update();
        } else {
            // @ts-ignore
            pieChart.data.datasets[datasetIndex].offset[index] = 0;
            pieChart.update();
        }
    }
};

export default PieChart;
