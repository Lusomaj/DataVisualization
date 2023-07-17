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
      text: 'Luwero District',
    },
  },
};

const labels =  ['e.coli (CFU/100ml)', 'pH (pH units)', 
'Electrical Conductivtiy (µs/cm)', 'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 
'Total Dissolved Solids (mg/L)', 'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)', 'Total Hardness (mg/L)', 
'Calcium Hardness (mg/L)', 'Magnesium Hardness (mg/L)', 'Flouride (mg/L)', 'Chloride (mg/L)', 
'Sulphates (mg/L)', 'Nitrites-N (mg/L)', 'Nitrates-N (mg/L)', 'Ammonium-N (mg/L)', 'Phosphates-P (mg/L)', 
'Total Chlorine ', 'Free Chlorine'];

/////Parameters for the single Polar Chart

const singleName = 'Vuumba Community borehole';
const singleDataSet =  ['1', '6.57', '286', '1.7', '1', '200.2', '46', 
'56.12', '86.2', '44.2', '42', '0.41', '18.32', '14.04', '0', '15.11', '0.05', '0.47', null, null].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Vuumba Community borehole',
      data: ['1', '6.57', '286', '1.7', '1', '200.2', '46', 
'56.12', '86.2', '44.2', '42', '0.41', '18.32', '14.04', '0', '15.11', '0.05', '0.47', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Ndeeba Masjid Noor shallow well',
      data: ['44', '6.45', '169.9', '1.6', '13', 
'118.93', '51', '62.22', '41.2', '21.2', '20', '0.36', '1.56', '20.6', '0', '4.62', '0.09', '1.03', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Bulami community borehole',
      data: ['1', '6.64', '108.5', '1.9', '14', '75.95', 
'37', '45.14', '33.4', '16.4', '17', '0.21', '0.67', '0.81', '0.02', '3.85', '0.03', '0.33', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Kajjawo community borehole',
      data: ['1', '5.27', '187.8', '1.4', '8', '131.46', '13', 
'15.86', '29.8', '15.2', '14.6', '0.09', '14.52', '24.97', '0.01', '10.02', '0.14', '0.17', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Zirobwe Masjid Taqwa shallow well',
      data: ['6.5', '1220', '1.7', '19', '854', 
'150', '183', '357.2', '165.8', '191.4', '0.42', '173.87', '43.43', '2.3', '37.79', '0.12', '0.36', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Namakofu shallow well',
      data: ['1', '6.74', '331', '2.3', '12', '231.7', '100', '122', 
'82.6', '51.8', '30.8', '0.78', '8.3', '36.58', '0.01', '6.16', '0.07', '0.55', null, null]
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'NWSC Zirobwe resovior',
      data: ['1', '6.48', '446', '1.7', '1', '312.2', '130', '158.6', 
'144.4', '77.2', '67.2', '0.73', '27.63', '39.77', '0', '8.69', '0.07', '0.36', '0.15', '0.14'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'NWSC Zirobwe PSP',
      data: ['1', '6.38', '302', '1.9', '7', '211.4', '110', '134.2', 
'102', '46.6', '55.4', '0.46', '9.86', '27.67', '0', '3.22', '0.07', '0.39', '0.07', '0.02'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'Nampunge community borehole',
      data: ['1', '5.73', '172.1', '2', '0.2432', '120.47', 
'43', '52.46', '38.4', '17.8', '20.6', '0.2', '4.18', '14.8', '0', '4.5', '0.09', '0.22', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
    },
     {
      label: 'Lutete community borehole',
      data: ['1', '5.17', '291', '1.2', '0.2432', '203.7', '24', 
'29.28', '71.2', '32.8', '38.4', '0.15', '45.38', '16.04', '0', '9.47', '0.23', '0.38', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 235, 150)',
    },
     {
      label: 'Kaliro katono community borehole - DWD 17219',
      data: ['1', '6.71', '642', '1.7', 
'0.2432', '449.4', '120', '146.4', '191', '88.6', '102.4', '0.26', '18.4', '8.93', '0.03', '9.17', '0.06', 
'0.31', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 74, 53, 0.575)',
    },
     {
      label: 'Wobulenzi community borehole',
      data: ['1', '5.81', '303', '16', '5', '212.1', 
'36', '43.92', '89.8', '39', '50.8', '0.05', '0.33', '0.79', '0', '0.04', '0.05', '0.17', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 68, 0.877)',
    },
     {
      label: 'NWSC Luweero Kiosk',
      data: ['1', '6.26', '277', '1.9', '4', '193.9', '72', '87.84', 
'40', '22.6', '17.4', '0.22', '26.19', '13.5', '0', '5.1', '0.08', '0.27', '0.17', '0.16'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 196, 0.575)',
    },
     {
      label: 'NWSC Luweero Final treated water',
      data: ['1', '6.44', '278', '1.8', '0.2432', '194.6', 
'70', '85.4', '78.6', '42.2', '36.4', '0.23', '26.36', '14.59', '0', '4.87', '0.06', '0.29', '0.74', '0.65'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(193, 53, 235, 0.575)',
    },
  ],
};


const pieChartDataSet = [
  {
    'name': 'e.coli (CFU/100ml)',
    'value': 1
  },
  {
    'name': 'pH (pH units)',
    'value': 6.57
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 286
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.7
  },
  {
    'name': 'Color (Apparent) (PtCo.)',
    'value': 1
  },
  {
    'name': 'Total Dissolved Solids (mg/L)',
    'value': 200.2
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 46
  },
  {
    'name': 'Bicarbonates (mg/L)',
    'value': 56.12
  },
  {
    'name': 'Total Hardness (mg/L)',
    'value': 86.2
  },
  {
    'name': 'Calcium Hardness (mg/L)',
    'value': 44.2
  },
  {
    'name': 'Magnesium Hardness (mg/L)',
    'value': 42
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.41
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 18.32
  },
  {
    'name': 'Sulphates (mg/L)',
    'value': 14.04
  },
  {
    'name': 'Nitrites-N (mg/L)',
    'value': 0
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 15.11
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.05
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.47
  },
  {
    'name': 'Total Chlorine',
    'value': 'ND'
  },
  {
    'name': 'Free Chlorine',
    'value': 'ND'
  }
]

const SampleChartLuwero = () => {

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
        <h3>Luwero District</h3>
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
    <td>E.coli</td>
    <td>&lt;1</td>
    <td>pH</td>
    <td>5.5-9.5</td>
    <td>Electrical Conductivity</td>
    <td>2500</td>
    <td>Turbidity</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Color (Apparent)</td>
    <td>50</td>
    <td>Total Dissolved Solids</td>
    <td>1500</td>
    <td>Total Alkalinity</td>
    <td>100-200</td>
    <td>Bicarbonates</td>
    <td>400</td>
  </tr>
  <tr>
    <td>Total Hardness</td>
    <td>600</td>
    <td>Calcium Hardness</td>
    <td>600</td>
    <td>Magnesium Hardness</td>
    <td>600</td>
    <td>Fluoride</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>Chloride</td>
    <td>250</td>
    <td>Sulphates</td>
    <td>400</td>
    <td>Nitrites-N</td>
    <td>0.9</td>
    <td>Nitrates-N</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Ammonium-N</td>
    <td>0.5</td>
    <td>Phosphates-P</td>
    <td>0.7</td>
    <td>Total Chlorine</td>
    <td>-</td>
    <td>Free Chlorine</td>
    <td>-</td>
  </tr>
</table>
      </Row>
      <Row className='graph-container'>
          <Dashboard district={'Luwero'}></Dashboard>
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

export default SampleChartLuwero
