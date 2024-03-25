import { BsArrowUp } from "react-icons/bs";
import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import totalOrders from "../_data/totalOrders.json";
defaults.maintainAspectRatio = false;
defaults.responsive = true;


type TTotalSpent = {
  label: string
  discount: number 
}

type Props = {
  data: TTotalSpent[]
  title: string 
  summary: string 
  percent: string
  extraClass: string
  stroke: string
}

export default function TotalOrders2({data,title, summary, percent, extraClass, stroke}: Props) {
  return (
    <>
      <div className="w-full bg-white mb-2 md:mb-0 p-5 rounded-lg shadow-sm duration-300 hover:shadow-md h-fit">
        <div className="block md:flex mt-5 flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="text-xl font-semibold text-nowrap">{title}</div>
            <div className="text-gray-400">Last 7 days</div>
            <div className="mt-5">
              <div className="font-bold text-4xl">{summary}</div>
              <div className="mt-2 flex gap-x-2">
                <div className={`flex items-center gap-x-1 ${extraClass}`}>
                  <div>{/* <ArrowUpIcon /> */}</div>
                  <div className="font-semibold">{percent}</div>
                </div>
                <div className="text-gray-400">vs last 7 days</div>
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-1/2">
            {/* chart */}
            <Line
              data={{
                labels: totalOrders.map((data) => data.label),
                datasets: [
                  {
                    label: "Orders",
                    data: totalOrders.map((data) => data.orders),
                    backgroundColor: stroke, // Line color
                    borderColor: stroke, // Border color
                    borderWidth: 3, // Line width
                    pointRadius: 0, // Hide points initially
                    hoverRadius: 8, // Hover radius
                    hoverBackgroundColor: "white", // Hover background color
                    hoverBorderColor: stroke, // Hover border color
                    hoverBorderWidth: 3, // Hover border width
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
                      color: stroke, // Set color of x-axis labels to gray
                    },
                    grid: {
                      display: false,
                    },
                    display: false,
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
