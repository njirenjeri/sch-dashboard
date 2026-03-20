"use client"

import Image from "next/image"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    {
        name: "Jan",
        income: 62000,
        expense: 23040,
    },
    {
        name: "Feb",
        income: 32000,
        expense: 10340,
    },
    {
        name: "March",
        income: 87360,
        expense: 23412,
    },
    {
        name: "April",
        income: 90270,
        expense: 50098,
    },
    {
        name: "May",
        income: 67273,
        expense: 25098,
    },
    {
        name: "Jun",
        income: 77343,
        expense: 58902,
    },
    {
        name: "Jul",
        income: 45673,
        expense: 5050,
    },
    {
        name: "Aug",
        income: 23573,
        expense: 29055,
    },
    {
        name: "May",
        income: 75433,
        expense: 15455,
    },
    {
        name: "Sep",
        income: 77983,
        expense: 58905,
    },
    {
        name: "Oct",
        income: 12373,
        expense: 6555,
    },
    {
        name: "Nov",
        income: 70913,
        expense: 11545,
    },
    {
        name: "Dec",
        income: 78913,
        expense: 23455,
    },
]

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3"  stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#c1d5db"}} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{fill:"#c1d5db"}} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"18px", paddingBottom:"30px"}}/>

          {/* <Legend /> */}
          {/* <Tooltip /> */}
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={3} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart