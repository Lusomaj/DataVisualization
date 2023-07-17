import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  {
    name: 'Electrical Conductivtiy (µs/cm)',
    value: 246
  },
  {
    name: 'pH (pH units)',
    value: 7
  },
  {
    name: 'Turbidity (NTU)',
    value: 2.69
  },
  {
    name: 'Color (Apparent) (PtCo.)',
    value: 57
  },
  {
    name: 'Total Alkalinity (mg/L)',
    value: 125
  },
  {
    name: 'Total hardness (mg/L)',
    value: 110
  },
  {
    name: 'Calcium Hardardness (mg/L)',
    value: 95
  },
  {
    name: 'Flouride (mg/L)',
    value: 0.41
  },
  {
    name: 'Nitrites (mg/L)',
    value: 0.151
  },
  {
    name: 'Sulphate (mg/L)',
    value: 5
  },
  {
    name: 'Ammonium-N (mg/L)',
    value: 1.63
  },
  {
    name: 'Chloride (mg/L)',
    value: 3
  },
  {
    name: 'Phosphates-P (mg/L)',
    value: 0.29
  },
  {
    name: 'Nitrates-N (mg/L)',
    value: 0.71
  },
  {
    name: 'Sodium (mg/L)',
    value: 42
  },
  {
    name: 'Potassium (mg/L)',
    value: 7
  },
  {
    name: 'Iron (mg/L)',
    value: 1.35
  },
  {
    name: 'Free Chlorine (mg/L)',
    value: null
  }
]
;

const Example = () => {
  return (
    <ResponsiveContainer width={800} height={800}>
      <PieChart width={800} height={800}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data02}
          cx="50%"
          cy="50%"
          outerRadius={300}
          fill="#8b6216"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Example;
