import { BsArrowUp } from "react-icons/bs";
import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import totalSpent from "../_data/totalSpent.json";
defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function TotalOrders() {
  return (
    <>
      <div className="w-full bg-white mb-2 md:mb-0 p-5 rounded-lg shadow-sm duration-300 hover:shadow-md h-fit">
        <div className="block md:flex mt-5 flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="text-xl font-semibold">Total Orders</div>
            <div className="text-gray-400">Last 7 days</div>
            <div className="mt-5">
              <div className="font-bold text-4xl">1.4K</div>
              <div className="mt-2 flex gap-x-2">
                <div className="cs-text-green flex items-center gap-x-1">
                  <div><BsArrowUp className="text-green-500 stroke-1" /></div>
                  <div>4%</div>
                </div>
                <div className="text-gray-400">vs last 7 days</div>
              </div>
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
