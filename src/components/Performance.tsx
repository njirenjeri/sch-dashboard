"use client";

import Image from "next/image";
import { Pie, PieChart, Sector, Cell, ResponsiveContainer } from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="bg-white rounded-md p-4 h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <PieChart style={{ maxWidth:"400", maxHeight:"400", width: "100%", height: "100%" }} responsive>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="60%"
          innerRadius={70}          
        />
        {/* <RechartsDevtools /> */}
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/12 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-sm text-gray-400">of 10 Max</p>
      </div>
      <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">1st Sememster - 2nd Semester</h2>
    </div>
  );
};

export default Performance;
