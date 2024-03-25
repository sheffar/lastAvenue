import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import the data or replace totalProfit using a response from the api
import totalReport from "../_data/totalReport.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function ReportChart() {
    const strokeColor = "blue";
    return (
        <>
            <Line
                data={{
                    labels: totalReport.map((data) => data.label),
                    datasets: [
                        {
                            label: "Orders",
                            data: totalReport.map((data) => data.report),
                            backgroundColor: strokeColor, // Line color
                            borderColor: strokeColor, // Border color
                            borderWidth: 3, // Line width
                            pointRadius: 0, // Hide points initially
                            hoverRadius: 8, // Hover radius
                            hoverBackgroundColor: "white", // Hover background color
                            hoverBorderColor: strokeColor, // Hover border color
                            hoverBorderWidth: 3, // Hover border width
                        },
                    ],
                }}
                options={{
                    elements: {
                        line: {
                            tension: 0,
                        },
                    },
                    plugins: {
                        title: {
                            text: false,
                        },
                        tooltip: {
                            yAlign: "bottom",
                            enabled: true,
                            displayColors: false,
                            callbacks: {
                                title: () => null,
                                label: function (context) {
                                    let label = "";

                                    if (label) {
                                        label += ": ";
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat("en-US").format(context.parsed.y);
                                    }
                                    return label;
                                },
                            },
                        },
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: strokeColor, // Set color of x-axis labels to gray
                            },
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                        },
                    },
                    interaction: {
                        intersect: false,
                    },
                }}
            />
        </>
    )
}