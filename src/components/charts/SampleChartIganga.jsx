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
      text: 'Iganga District',
    },
  },
};

const labels =  ['Electrical Conductivtiy (µs/cm)', 'pH (pH units)', 
'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 'Total Alkalinity (mg/L)', 'Total hardness (mg/L)', 
'Calcium Hardardness (mg/L)', 'Flouride (mg/L)', 'Nitrites (mg/L)', 'Sulphate (mg/L)', 
'Ammonium-N (mg/L)', 'Chloride (mg/L)', 'Phosphates-P (mg/L)', 'Nitrates-N (mg/L)', 'Sodium (mg/L)', 
'Potassium (mg/L)', 'Iron (mg/L)'];

/////Parameters for the single Polar Chart

const singleName = 'Magafira ,mosque Shallow well';
const singleDataSet = [162, 4.9, 1.67, 1, 12, 26, 15, 0.12, 0.005, 39, 0.1, 4, 0.03, 4.29, 13, 10, 0.04];

/////Parameters for the single Polar Chart End


export const data = {
  labels,
  datasets: [
    {
      label: 'Magafira ,mosque Shallow well',
      data: [162, 4.9, 1.67, 1, 12, 26, 15, 0.12, 0.005, 39, 0.1, 4, 0.03, 4.29, 13, 10, 0.04],

      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'CMS shallow well',
      data: [384, 5.3, 1.74, 6, 31, 110, 69, 0.09, 0.054, 11, 0.03, 47, 0.1, 19, 26, 10, 0.07]
,
      backgroundColor: 'rgba(105, 235, 53, 0.5)',
    },
    {
      label: 'Resource centre Busoga University Borehole',
      data: [926, 6, 1.85, 2, 110, 250, 170, 0.12, 0.192, 35, 2.04, 122, 0.04, 36, 85, 33, 0.05]
,
      backgroundColor: 'rgba(108, 53, 235, 0.5)',
    },
     {
      label: 'Igulusa Shallow well',
      data: ['240', '5.4', '2.71', '12', '58', '75', '48', 
'0.18', '0.031', '24', '0.08', '13', '0.1', '5.6', '13', '12', '0.03'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Mukama protected spring',
      data: ['151', '5.9', '2.41', '20', '44', '53', 
'29', '0.18', '0.006', '2', '0.01', '4', '0.05', '8.13', '11', '1.8', '0.05'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Nambale B/H',
      data: ['231', '6', '1.94', '19', '92', '67', '34', '0.23', '0.004', 
'27', '0.04', '2', '0.14', '0.73', '24', '5.1', '0.03'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Walumbe protected spring',
      data: ['218', '5.6', '2.09', '17', '20', '65', '37', 
'0.29', '0.004', '14', '0.05', '12', '0.26', '3.56', '17', '3.6', '0.03'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Nabikoote Primary Sch Borehole DWD 24675',
      data: ['108', '5.2', '1.91', '3', 
'33', '27', '9.6', '0.06', '0.003', '4', '0.002', '3', '0.09', '4.79', '13', '3', '0.09'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Busei Shallow well',
      data: ['276', '5.4', '1.85', '2', '48', '50', '30', 
'0.08', '0.004', '25', '0.002', '16', '0.04', '9.7', '27', '8', '0.06'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
    
  ],
};

const pieChartData = [
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 162
  },
  {
    'name': 'pH (pH units)',
    'value': 4.9
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.67
  },
  {
    'name': 'Color (Apparent) (PtCo.)',
    'value': 1
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 12
  },
  {
    'name': 'Total hardness (mg/L)',
    'value': 26
  },
  {
    'name': 'Calcium Hardardness (mg/L)',
    'value': 15
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.12
  },
  {
    'name': 'Nitrites (mg/L)',
    'value': 0.005
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 39
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.1
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 4
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.03
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 4.29
  },
  {
    'name': 'Sodium (mg/L)',
    'value': 13
  },
  {
    'name': 'Potassium (mg/L)',
    'value': 10
  },
  {
    'name': 'Iron (mg/L)',
    'value': 0.04
  }
]

const SampleChartIganga = () => {

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
        <h3>Iganga District</h3>
        <table>
  <tr>
    <th>Parameter</th>
    <th>Water Standards</th>
    <th>Parameter</th>
    <th>Water Standards</th>
    <th>Parameter</th>
    <th>Water Standards</th>
    <th>Parameter</th>
    <th>Water Standards</th>
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
    <td>Total hardness</td>
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
          <Dashboard district={'Iganga'}></Dashboard>
      </Row>

    </Col>
     <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Iganga District</h3>
      </Row>
      <Row className='graph-container'>
        <Bar options={options} data={data} />
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Iganga District</h3>
      </Row>
      <Row className='graph-container'>
         <Line options={options} data={data} />
      </Row>

    </Col>
    <Col className='graph-wrapper'>
      <Row className='graph-desc'>
        <h3>Iganga District</h3>
      </Row>
      <Row className='graph-container'>
          <SampleLineChart dataset={pieChartData}></SampleLineChart>
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
      <Col><D3PieChart dataset={pieChartData} /></Col>
      </Row>

    </Col>

    </>
  )
}

export default SampleChartIganga
