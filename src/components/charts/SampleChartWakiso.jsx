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
      text: 'Wakiso District',
    },
  },
};

const labels =  ['Field Tempeature (oC)', 'Dissolved Oxygen (mg/L)', 
'Turbidity (NTU)', 'pH (pH units)', 'Electrical Conductivity (µS/cm)', 'Total disolved solids (mg/l)', 
'Total Hardness as CaCO3 (mg/l)', 'Calcium hardness as CaCO3 (mg/l)', 'Magnesium hardness as CaCO3 (mg/l)', 
'Calcium (mg/l)', 'Magnesium (mg/l)', 'Sodium (mg/l)', 'Potassium (mg/l)', 'Total Alkalinity (mg/l)', 
'Bicarbonates (mg/l)', 'Fluoride (mg/l)', 'Sulphates (mg/l)', 'Nitrates as N (mg/l)', 'Nitrites as N (mg/l)', 
'Ammonium as N (mg/l)', 'Phosphates as P (mg/l)', 'Total Iron (mg/l)', 'Manganese (mg/l)', 
'Silica (mg/l)', 'E.Coli (CFU/100ml)'];

/////Parameters for the single Polar Chart

const singleName =  'Results';
const singleDataSet = ['24', '5', '1.85', '5.44', '235', '165', '80', '50', '30', '20', 
'7', '12', '3.6', '56', '68', '0.13', '0.7', '9.85', '0.005', '1.05', '0.03', '0.05', '0.585', '23.9', '20'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Results',
      data: ['24', '5', '1.85', '5.44', '235', '165', '80', '50', '30', '20', 
'7', '12', '3.6', '56', '68', '0.13', '0.7', '9.85', '0.005', '1.05', '0.03', '0.05', '0.585', '23.9', '20'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Results.1',
      data: ['24.4', '1.11', '1.77', '4.8', '200', '140', '34', '11', '23', 
'4', '6', '19', '5.4', '11', '13', '0.07', '0.7', '12.22', '0.005', '0.55', '0.04', '0.08', '1.244', '21.5', '2'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Results.2',
      data: ['27.5', '5.5', '1.8', '4.25', '223', '156', '49', '18', 
'31', '7', '7', '18', '4.3', '4', '5', '0.15', '0.7', '15.57', '0.007', '0.27', '0.05', '0.05', 
'0.599', '18', '1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Results.3',
      data: ['24', '3.2', '1.9', '4.88', '224', '157', '58', '22', '36', 
'9', '9', '14', '5.9', '16', '20', '0.11', '5.9', '11.09', '0.002', '0.02', '0.03', 
'0.17', '0.364', '25.8', '8'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Results.4',
      data: ['23.7', '4.3', '1.78', '5.9', '163', '114', '54', '34', 
'20', '14', '5', '13', '2.8', '69', '84', '0.19', '1.3', '2.11', '0.002', '0.04', '0.19', '0.03', 
'0.062', '27.2', '1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Results.5',
      data: ['24.8', '3.5', '1.96', '4.38', '161', '113', '30', '12', 
'18', '5', '4', '13', '5.4', '5.6', '7', '0.07', '0.5', '11.38', '0.003', '0.05', '0.03', '0.06', 
'0.899', '23.8', '1']
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'Results.6',
      data: ['24', '3.5', '21', '5', '57', '40', '38', '7.8', '30.2', '3', 
'7', '1.3', '1.1', '18', '22', '0.15', '0.3', '1.34', '0.013', '0.16', '0.26', '2.05', '0.177', '13.4', '2'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Results.7',
      data: ['23.5', '4.8', '4.45', '4.8', '38', '27', '16', '1.6', 
'14.4', '1', '3', '1.4', '1', '12', '15', '0.12', '1.2', '1.54', '0.002', '0.03', '0.06', '0.21', 
'0.318', '20.3', '1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'Results.8',
      data: ['23', '4.2', '2.65', '4.8', '67', '47', '25', '9', '16', '4', '4', 
'2.9', '1.1', '10', '12', '0.16', '2.8', '3.23', '0.003', '0.04', '0.11', '0.11', '0.421', '20', '19'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
    },
  ],
};
const pieChartDataSet = [
{
  'name': 'Electrical Conductivtiy (µs/cm)',
  'value': 235.0
},
{
  'name': 'pH (pH units)',
  'value': 5.44
},
{
  'name': 'Turbidity (NTU)',
  'value': 1.85
},
{
  'name': 'Total Alkalinity (mg/L)',
  'value': 56.0
},
{
  'name': 'Total hardness (mg/L)',
  'value': 80.0
},
{
  'name': 'Calcium Hardardness (mg/L)',
  'value': 50.0
},
{
  'name': 'Flouride (mg/L)',
  'value': 0.13
},
{
  'name': 'Nitrites (mg/L)',
  'value': 0.7
},
{
  'name': 'Sulphate (mg/L)',
  'value': 9.85
},
{
  'name': 'Ammonium-N (mg/L)',
  'value': 0.005
},
{
  'name': 'Sodium (mg/L)',
  'value': 12.0
},
{
  'name': 'Potassium (mg/L)',
  'value': 3.6
},
{
  'name': 'Iron (mg/L)',
  'value': 23.9
},
{
  'name': 'Phosphates-P (mg/L)',
  'value': 20.0
},
{
  'name': 'Nitrates-N (mg/L)',
  'value': 7.0
}
]

const SampleChartWakiso= () => {

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
        <h3>Wakiso District</h3>
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
    <td>Field Temperature</td>
    <td>_</td>
    <td>Dissolved Oxygen</td>
    <td>_</td>
    <td>Turbidity</td>
    <td>25</td>
    <td>pH</td>
    <td>5.5-9.5</td>
  </tr>
  <tr>
    <td>Electrical Conductivity</td>
    <td>2500</td>
    <td>Total Dissolved Solids</td>
    <td>1500</td>
    <td>Total Hardness as CaCO3</td>
    <td>600</td>
    <td>Calcium hardness as CaCO3</td>
    <td>600</td>
  </tr>
  <tr>
    <td>Magnesium hardness as CaCO3</td>
    <td>600</td>
    <td>Calcium</td>
    <td>150</td>
    <td>Magnesium</td>
    <td>100</td>
    <td>Sodium</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Potassium</td>
    <td>50</td>
    <td>Total Alkalinity</td>
    <td>100-200</td>
    <td>Bicarbonates</td>
    <td>400</td>
    <td>Fluoride</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>Sulphates</td>
    <td>400</td>
    <td>Nitrates as N</td>
    <td>10</td>
    <td>Nitrites as N</td>
    <td>0.9</td>
    <td>Ammonium as N</td>
    <td>0.5</td>
  </tr>
  <tr>
    <td>Phosphates as P</td>
    <td>0.7</td>
    <td>Total Iron</td>
    <td>0.5</td>
    <td>Manganese</td>
    <td>0.1</td>
    <td>Silica</td>
    <td>30</td>
  </tr>
  <tr>
    <td>E.Coli</td>
    <td>&lt;1</td>
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
          <Dashboard district={'Wakiso'}></Dashboard>
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

export default SampleChartWakiso
