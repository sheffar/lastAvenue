import CountryCard from "./CountryCard";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

export default function Countries() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const countries = [
    {
      country: 'United States',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WQB7W-1NcESGrv6W4scsrUIEQshpYjgFSRtXeZ5Q_A&s',
      number: 2500
    },
    {
      country: 'France',
      imgUrl: 'https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg',
      number: 450
    },
    {
      country: 'Nigeria',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png',
      number: 3800
    },
    {
      country: 'Denmark',
      imgUrl: 'https://cdn.britannica.com/07/8007-050-D4170843/Flag-Denmark.jpg',
      number  : 500
    },
    {
      country: 'Ireland',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirnzfX1vORhjIhXvxF3sdKgjTE8PgvHIdGhy8gvh4Xg&s',
      number: 3500
    },
    {
      country: 'Ghana',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png',
      number: 5100
    },
    
  
  ]
  return (
    <div className="bg-white rounded-md p-3">
      <p className="font-semibold">Users in last 14 days</p>
      <p className="text-xl font-semibold">30</p>
      <p className="text-[11px]">User per Minute</p>
      <div className="flex text-sm font-semibold items-center justify-between">
        <p>Top Countries</p>
        <p>Users</p>
      </div>
      <div className="h-12 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3 mt-2">
        {countries.map((country, key: number) => (
          <CountryCard country={country} key={key} />
        ))}
      </div>
    </div>
  );
}
