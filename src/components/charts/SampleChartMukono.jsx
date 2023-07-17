import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import D3PieChart from './d3PieChart';
import SampleLineChart from './SampleLineGraph';
import D3RadarChart from './D3RadarChart';
import { Col, Row } from 'react-bootstrap';
import Dashboard from '../d3/Dashboard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      labels:{
        usePointStyle: true,
        boxHeight: 10,
        boxWidth: 10,
        pointStyle: 'circle',
        useBorderRadius: true,
        borderRadius: '50%'
      }
    },
    title: {
      display: true,
      text: 'Mukono District',
    },
  },
};

const labels =  ['Electrical Conductivtiy (µs/cm)', 'pH (pH units)', 
'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 'Total Alkalinity (mg/L)', 'Total hardness (mg/L)', 
'Calcium Hardardness (mg/L)', 'Flouride (mg/L)', 'Nitrites (mg/L)', 'Sulphate (mg/L)', 
'Ammonium-N (mg/L)', 'Chloride (mg/L)', 'Phosphates-P (mg/L)', 'Nitrates-N (mg/L)', 'Sodium (mg/L)', 
'Potassium (mg/L)', 'Iron (mg/L)'];

/////Parameters for the single Polar Chart

const singleName =  'katwe protected spring';
const singleDataSet =  ['55', '4.7', '2.26', '13', '13', '37', '9.4', 
'0.05', '0.003', '3', '0', '3', '0.03', '3.05', '2.4', '1.2', '0.24'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'katwe protected spring',
      data: ['55', '4.7', '2.26', '13', '13', '37', '9.4', 
'0.05', '0.003', '3', '0', '3', '0.03', '3.05', '2.4', '1.2', '0.24'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Kiyoora health centre Borehole',
      data: ['47', '5.2', '58.6', '621', '6.2', '21', 
'9.8', '0.18', '0.002', '8', '0.71', '5', '0.14', '0.16', '2.6', '0.3', '5.1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Bulonda protected spring MKN/04/231',
      data: ['90', '4.5', '1.92', '2', '5', 
'13', '7.8', '0.08', '0.003', '1', '0.002', '8', '0.02', '6.9', '7.2', '3.3', '0.27'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Katosi Borehole',
      data: ['434', '4.9', '1.93', '0.2432', '8.4', '67', '44', '0.1', 
'0.005', '7', '0.01', '50', '0.04', '27', '32', '33', '0.19'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Nakisunga protected spring MKN/04/395',
      data: ['43', '4.7', '2.34', '18', '8.8', '11', 
'7.8', '0.08', '0.002', '2', '0.05', '4', '0.02', '1.82', '2.6', '1.7', '0.1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Oluzi lwa mulule protected spring',
      data: ['96', '4.8', '2.1', '5', '17', '24', '13', 
'0.12', '0.002', '5', '0', '6', '0.05', '5.3', '6.8', '4.8', '0.01']
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'Kitega Wanton protected spring',
      data: ['122', '5.1', '2.84', '29', '15', '30', 
'15', '0.12', '0.006', '3', '0.13', '18', '0.04', '5.2', '9.3', '4.4', '0.32'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Upper Kauga borehole',
      data: ['122', '5.4', '1.76', '2', '32', '26', '18', '0.11', 
'0.008', '2', '0.02', '3', '0.12', '6.1', '9', '5.6', '0.07'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
  ],
};

const pieChartDataSet =  [
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 55
  },
  {
    'name': 'pH (pH units)',
    'value': 4.7
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 2.26
  },
  {
    'name': 'Color (Apparent) (PtCo.)',
    'value': 13
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 13
  },
  {
    'name': 'Total hardness (mg/L)',
    'value': 37
  },
  {
    'name': 'Calcium Hardardness (mg/L)',
    'value': 9.4
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.05
  },
  {
    'name': 'Nitrites (mg/L)',
    'value': 0.003
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 3
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 3
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.03
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 3.05
  },
  {
    'name': 'Sodium (mg/L)',
    'value': 2.4
  },
  {
    'name': 'Potassium (mg/L)',
    'value': 1.2
  },
  {
    'name': 'Iron (mg/L)',
    'value': 0.24
  }
]
const SampleChartMukono = () => {

  return (
    <>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>All 16 Disctricts on the Map of Uganda</h3>
      </Row>
      <Row className='graph-container'>
      <Col><img src="/uganda.png" alt="Image" style={{ width: '400px', height: '400px' }} /></Col>
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Mukono District</h3>
        <table>
  <tr>
    <th>Parameter</th>
    <th>water standards</th>
    <th>Parameter</th>
    <th>water standards</th>
    <th>Parameter</th>
    <th>water standards</th>
    <th>Parameter</th>
    <th>water standards</th>
  </tr>
  <tr>
    <td>Electrical Conductivity</td>
    <td>2500</td>
    <td>pH</td>
    <td>5.5-9.5</td>
    <td>Turbidity</td>
    <td>25</td>
    <td>Color (Apparent)</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Total Alkalinity</td>
    <td>100-200</td>
    <td>Total Hardness</td>
    <td>600</td>
    <td>Calcium Hardness</td>
    <td>600</td>
    <td>Fluoride</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>Nitrites</td>
    <td>0.9</td>
    <td>Sulphate</td>
    <td>400</td>
    <td>Ammonium-N</td>
    <td>0.5</td>
    <td>Chloride</td>
    <td>250</td>
  </tr>
  <tr>
    <td>Phosphates-P</td>
    <td>0.7</td>
    <td>Nitrates-N</td>
    <td>10</td>
    <td>Sodium</td>
    <td>200</td>
    <td>Potassium</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Iron</td>
    <td>0.5</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
      </Row>
      <Row className='graph-container'>
          <Dashboard district={'Mukono'}></Dashboard>
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Histogram</h3>
      </Row>
      <Row className='graph-container'>
          <Bar options={options} data={data} />
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Line Chart</h3>
      </Row>
      <Row className='graph-container'>
          <Line options={options} data={data} />
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Sample Line Chart</h3>
      </Row>
      <Row className='graph-container'>
          <SampleLineChart dataset={pieChartDataSet}></SampleLineChart>
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Radar Chart</h3>
      </Row>
      <Row className='graph-container'>
          <D3RadarChart options={options} dataset={singleDataSet} name={singleName } lebels={labels}></D3RadarChart>
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Pie Chart</h3>
      </Row>
      <Row className='graph-container'>
      <Col><D3PieChart dataset={pieChartDataSet} /></Col>
      </Row>

    </Col>
  
    </>
  )
}

export default SampleChartMukono
