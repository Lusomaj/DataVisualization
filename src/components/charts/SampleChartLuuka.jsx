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
      text: 'Luuka District',
    },
  },
};

const labels = ['E.Coli (CFU/100mL)', 'Turbidity (NTU)', 
'Electrical Conductivity (µs/cm)', 'pH (pH units)', 'Total disolved solids (mg/L)', 
'Chloride (mg/L)', 'Sulphate (mg/L)', 'Ammonium-N (mg/L)', 'Nitrite-N (mg/L)', 
'Nitrates-N (mg/L)', 'Phosphate-P (mg/L)'];

/////Parameters for the single Polar Chart

const singleName = "Our Lady's Secondary School Kitwekyambogo";
const singleDataSet =  ['1', '2.76', '480', '7.6', '336', 
'16.4', '98.6', '0.024', '0.005', '3.834', '0.281'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: "Our Lady's Secondary School Kitwekyambogo",
      data: ['1', '2.76', '480', '7.6', '336', 
'16.4', '98.6', '0.024', '0.005', '3.834', '0.281'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Kitwekyambogo primary school',
      data: ['1', '1.54', '370', '7.8', '259', '5.3', '33.6', 
'0.035', '0.002', '5.19', '0.206'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Kiyunga Primary school',
      data: ['1', '1.23', '261', '7.6', '183', '5.1', '22.5', 
'0.048', '0.002', '3.329', '0.209'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Tomborehole',
      data: ['1', '1.67', '456', '7.8', '319', '5.5', '47.4', '0.042', 
'0.004', '4.548', '0.235'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Kiyunga hospital borehole',
      data: ['1', '1.23', '558', '7.4', '391', '34.4', 
'19.2', '0.018', '0.005', '30.057', '0.135'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
  ],
};


const pieChartDataSet = [
{
  'name': 'Electrical Conductivtiy (µs/cm)',
  'value': 480.0
},
{
  'name': 'pH (pH units)',
  'value': 7.6
},
{
  'name': 'Turbidity (NTU)',
  'value': 2.76
},
{
  'name': 'Sulphate (mg/L)',
  'value': 98.6
},
{
  'name': 'Ammonium-N (mg/L)',
  'value': 0.024
},
{
  'name': 'Nitrites (mg/L)',
  'value': 0.005
},
{
  'name': 'Nitrates-N (mg/L)',
  'value': 3.834
},
{
  'name': 'Phosphates-P (mg/L)',
  'value': 0.281
}
]

const SampleChartLuuka= () => {

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
        <h3>Luuka District</h3>
        <table>
  <tr>
    <th>Parameter</th>
    <th>water standards</th>
    <th>Parameter</th>
    <th>water standards</th>
    <th>Parameter</th>
    <th>water standards</th>
  </tr>
  <tr>
    <td>E.Coli</td>
    <td>&lt;1</td>
    <td>Turbidity</td>
    <td>25</td>
    <td>Electrical Conductivity</td>
    <td>2500</td>
  </tr>
  <tr>
    <td>pH</td>
    <td>5.5-9.5</td>
    <td>Total Dissolved Solids</td>
    <td>1500</td>
    <td>Chloride</td>
    <td>250</td>
  </tr>
  <tr>
    <td>Sulphate</td>
    <td>400</td>
    <td>Ammonium-N</td>
    <td>0.5</td>
    <td>Nitrite-N</td>
    <td>0.9</td>
  </tr>
  <tr>
    <td>Nitrates-N</td>
    <td>10</td>
    <td>Phosphate-P</td>
    <td>0.7</td>
    <td></td>
    <td></td>
  </tr>
</table>
      </Row>
      <Row className='graph-container'>
          <Dashboard district={'Luuka'}></Dashboard>
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

export default SampleChartLuuka
