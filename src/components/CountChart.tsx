"use client"

import Image from "next/image";
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";
// import { RechartDevtools } from '@recharts/devtools'

// import { RadioBarchart}
const data = [
{
    name: 'Total',
    count: 123,
    fill:'#fff',
},
  {
    name: 'Boys',
    count: 73,
    fill:'#FAE27C',
  }, 
  {
    name: 'Girls',
    count: 50,
    fill:'#C3EBFA',
  },
  
  
];


const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Students</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>

        {/* CHART */}
        {/* <div className="w-full h-[75%]">
        
                <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius="180" 
                    outerRadius = "0"
                    barSize={10} 
                    data={data}
                >
                    <RadialBar                       
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background                        
                        dataKey="count"
                        // isAnimationActive={isAnimationActive}
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                    <Tooltip />
                    {/* <RechartsDevtools /> */}
                {/* </RadialBarChart>           */}
             
        {/* </div> */} 
        <div className="relative w-full h-[75%]">
            <ResponsiveContainer>
            <RadialBarChart
                // style={{ width: '100%', maxWidth: '500px', aspectRatio: 2 }}
                responsive
                innerRadius="40%"
                outerRadius="100%"
                cx="50%"
                cy="50%"
                barSize={32}
                data={data}
                // startAngle={180}
                // endAngle={0}
            >
            <RadialBar
                // label={{ fill: '#fff', position: 'insideStart' }}
                background
                dataKey="count"
                //   isAnimationActive={isAnimationActive}
            />
            {/* <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" /> */}
            {/* <Tooltip /> */}
            {/* <RechartsDevtools /> */}
            </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 rounded-full bg-hopeSky"></div>
                <h1 className="font-bold">1,234</h1>
                <h2 className="text-xs text-gray-300">Boys (45%)</h2>
            </div>
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 rounded-full bg-hopeYellow"></div>
                <h1 className="font-bold">1,234</h1>
                <h2 className="text-xs text-gray-300">Girls (55%)</h2>
            </div>
        </div>
    </div>
  )
}

export default CountChart