import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

const Statistics = () => {

   
const data = [
    {
      name: 'Assignment 1',
      Marks: 60,
    },
    {
      name: 'Assignment 2',
      Marks: 60,
    },
    {
        name: 'Assignment 3',
        Marks: 56,
      },
      {
        name: 'Assignment 4',
        Marks: 60,
      },
      {
        name: 'Assignment 5',
        Marks: 60,
      },
      {
        name: 'Assignment 6',
        Marks: 58,
      },
      {
        name: 'Assignment 7',
        Marks: 60,
      },
      {
        name: 'Assignment 8',
        Marks: 58,
      },
  ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-center pt-8 pb-14 bg-gradient-to-r from-gray-300 to-gray-100">
        Assignment Marks
      </h2>
      <div className='w-96 ms-14 my-12'>
        <ComposedChart
        width={1200}
        height={400}
        data={data}
        >
             <Line type="monotone" dataKey="Marks" stroke="red" />
             <XAxis dataKey="name" />
             <YAxis />
             {/* <CartesianGrid stroke="#ccc" /> */}
             <Legend />
             <Bar dataKey="Marks" barSize={20} fill="#413ea0" />
             <Tooltip />
             <Area/>
        </ComposedChart>

      </div>
        </div>
    );
};

export default Statistics;