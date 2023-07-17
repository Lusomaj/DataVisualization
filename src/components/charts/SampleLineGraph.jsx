import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Cross,
  AreaChart,
} from 'recharts';
// using Customized gives you access to all relevant chart props

const CustomizedCross = (props) => {
  const { width, height, stroke, fill, formattedGraphicalItems } = props;
  // get first series in chart
  const firstSeries = formattedGraphicalItems[0];
  // get any point at any index in chart
  const secondPoint = firstSeries?.props?.points[1];

  // render custom content using points from the graph
  return (
    <Cross
      y={secondPoint?.y}
      x={secondPoint?.x}
      top={5}
      left={50}
      height={height}
      width={width}
      stroke={stroke ?? '#000'}
      fill={fill ?? 'none'}
    />
  );
};
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

const SampleLineChart = ({dataset}) => {
  return (
    <ResponsiveContainer width="80%" height={600}>
      <LineChart
        width={400}
        height={400}
        data={dataset}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Customized component={CustomizedCross} />
      </LineChart>
      
    </ResponsiveContainer>
  );
};

export default SampleLineChart;
