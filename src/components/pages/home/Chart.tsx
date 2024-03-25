import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import totalSpent from "../_data/totalSpent.json";
import ArrowUpIcon from "../../../assets/svgs/arrow-up.svg";
import CalendarIcon from "../../../assets/svgs/calendar.svg";
import CheckMarkCircleIcon from "../../../assets/svgs/checkmark-circle.svg";
import GraphIcon from "../../../assets/svgs/grpah.svg";
defaults.maintainAspectRatio = false;
defaults.responsive = true;


function Chart() {
  return (
    <>
      <div className="bg-white p-10 rounded-md duration-300 shadow-sm hover:shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <button className="p-2 pl-3 pr-3 rounded-lg bg-gray-100 text-gray-400 flex gap-x-2 items-center">
              <div>
                <img src={CalendarIcon} />
              </div>
              <div className="font-semibold">This Month</div>
            </button>
          </div>
          <div>
            <button className="bg-gray-100 p-2 pl-3 pr-3 rounded-lg">
              <img src={GraphIcon} />
            </button>
          </div>
        </div>
        <div className="block md:flex mt-5 flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="text-4xl font-bold">$37.5K</div>
            <div className="flex gap-x-3 items-center">
              <div className="text-gray-400">Total Spent</div>
              <div className="cs-text-green font-semibold flex gap-x-1 items-center">
                <div>
                  <img src={ArrowUpIcon} />
                </div>
                <div>+2.45%</div>
              </div>
            </div>
            <div className="cs-text-green mt-5 font-semibold flex gap-x-2 items-center">
              <div>
                <img src={CheckMarkCircleIcon} />
              </div>
              <div>On Track</div>
            </div>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-3/4">
            <Line
              data={{
                labels: totalSpent.map((data) => data.label),
                datasets: [
                  {
                    label: "Revenue",
                    data: totalSpent.map((data) => data.revenue),
                    backgroundColor: "rgba(31,41,55,0.9)", // Line color
                    borderColor: "rgba(31,41,55,0.9)", // Border color
                    borderWidth: 3, // Line width
                    pointRadius: 0, // Hide points initially
                    hoverRadius: 8, // Hover radius
                    hoverBackgroundColor: "white", // Hover background color
                    hoverBorderColor: "rgba(31,41,55,0.9)", // Hover border color
                    hoverBorderWidth: 3, // Hover border width
                  },
                  {
                    label: "Cost",
                    data: totalSpent.map((data) => data.cost),
                    backgroundColor: "rgba(31,41,55,0.4)", // Line color
                    borderColor: "rgba(31,41,55,0.4)", // Border color
                    borderWidth: 3, // Line width
                    pointRadius: 0, // Hide points initially
                    hoverRadius: 8, // Hover radius
                    hoverBackgroundColor: "white", // Hover background color
                    hoverBorderColor: "rgba(31,41,55,0.4)", // Hover border color (adjusted for second line)
                    hoverBorderWidth: 3, // Hover b
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.7,
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
                          label += new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(context.parsed.y);
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
                      color: "rgba(128,128,128,0.9)", // Set color of x-axis labels to gray
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    display: false,
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
