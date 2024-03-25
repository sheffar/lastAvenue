import { BsArrowUp } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

type Props = {
  text: string
  value: string
  percentage: number
  data: any
  height: number
  width: number
  strokeA: string
  strokeB: string
  strokeWidth: number
  chartType: string
}

export default function CompA({ text, value, percentage, chartType, data, height, width, strokeA, strokeB, strokeWidth }: Props) {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-green-500">
      <div className="bg-red-500 h-40 lg:flex-1"></div>
      <div className="bg-blue-500 h-40 lg:flex-1"></div>
    </div>
  );
}
