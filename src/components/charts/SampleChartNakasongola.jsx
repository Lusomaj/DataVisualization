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
      text: 'Nakasongola District',
    },
  },
};

const labels =  ['E.coli (CFU/100ml)', 'pH (pH units)', 
'Electrical Conductivtiy (µs/cm)', 'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 'Total Dissolved Solids (mg/L)', 
'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)', 'Total Hardness (mg/L)', 'Calcium Hardness (mg/L)', 
'Magnesium Hardness (mg/L)', 'Flouride (mg/L)', 'Chloride (mg/L)', 'Sulphates (mg/L)', 
'Nitrites-N (mg/L)', 'Nitrates-N (mg/L)', 'Ammonium-N (mg/L)', 'Phosphates-P (mg/L)', 
'Total Chlorine', 'Free Chlorine'];

/////Parameters for the single Polar Chart

const singleName =  'NWSC Kakooge PSP';
const singleDataSet =  ['1', '7.35', '420', '1.8', '0.2432', '294', 
'220', '268.4', '170.2', '86', '84.2', '1.63', '3.33', '1.52', '0', '0.21', '0.03', '0.18', 
'0.13', '0.07'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'NWSC Kakooge PSP',
      data: ['1', '7.35', '420', '1.8', '0.2432', '294', 
'220', '268.4', '170.2', '86', '84.2', '1.63', '3.33', '1.52', '0', '0.21', '0.03', '0.18', 
'0.13', '0.07'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Katugo private water supply system',
      data: ['6.73', '867', '2', '0.2432', 
'606.9', '135', '164.7', '328.2', '146', '182.2', '0.57', '157.87', 
'60.29', '0', '6.18', '0.04', '0.48', '0', '0'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Kyankanwa village borehole',
      data: ['1', '6.8', '498', '1.9', '0.2432', 
'348.6', '115', '140.3', '162.4', '84.4', '78', '0.38', '61.62', '17.81', '0.01', '7.9', '0.09', 
'0.33', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'NWSC Nakasongola PSP',
      data: ['1', '6.77', '141.5', '2.4', '21', '99.05', 
'40', '48.8', '38.2', '18.8', '19.4', '0.34', '11.54', '0.56', '0', '0.91', '0.06', 
'0.3', '0.15', '0.14'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'NWSC Nakasongola Kiosk',
      data: ['10', '6.57', '134.9', '2.6', '25', '94.43', 
'40', '48.8', '36.6', '17.8', '18.8', '0.2', '10.88', '0.61', '0', '0.22', '0.08', '0.15', '0', '0'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Nakasongola A village borehole',
      data: ['1', '6.56', '334', '1.8', '3', 
'233.8', '120', '146.4', '98.6', '48.4', '50.2', '0.32', '31.07', '1.03', '0', '6.71', '0.05', 
'0.36', null, null]
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'NWSC Nakasongola PSP.1',
      data: ['10', '6.65', '144.6', '2.8', '29', 
'101.22', '42', '51.24', '43.2', '19', '24.2', '0.11', '11.57', '1.13', '0', '0.35', '0.08', 
'0.17', '0', '0'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Nakasongola central police borehole',
      data: ['32', '6.23', '666', '2.1', 
'4', '466.2', '130', '158.6', '135.8', '68.4', '67.4', '0.63', '67.93', '12.35', '0.01', '28.99', 
'0.09', '0.19', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'St. Kizito Sasira borehole',
      data: ['1', '6.01', '264', '1.8', '0.2432', '184.8', 
'92', '112.24', '52.4', '25.4', '27', '0.18', '12.12', '23.26', '0', '3.03', '0.03', '0.16', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
    },
     {
      label: 'Rwenzori bottled water',
      data: ['1', '5.64', '132.5', '1.9', '0.2432', '92.75', '47', 
'57.34', '36.2', '21.6', '14.6', '0.27', '2.08', '2.06', '0', '2.35', '0.15', '0.44', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 235, 150)',
    },
  ],
};


const pieChartDataSet =  [
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 1
  },
  {
    'name': 'pH (pH units)',
    'value': 7.35
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 420
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.8
  },
  {
    'name': 'Color (Apparent) (PtCo.)',
    'value': 0.2432
  },
  {
    'name': 'Total Dissolved Solids (mg/L)',
    'value': 294
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 220
  },
  {
    'name': 'Bicarbonates (mg/L)',
    'value': 268.4
  },
  {
    'name': 'Total Hardness (mg/L)',
    'value': 170.2
  },
  {
    'name': 'Calcium Hardness (mg/L)',
    'value': 86
  },
  {
    'name': 'Magnesium Hardness (mg/L)',
    'value': 84.2
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 1.63
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 3.33
  },
  {
    'name': 'Sulphates (mg/L)',
    'value': 1.52
  },
  {
    'name': 'Nitrites-N (mg/L)',
    'value': 0
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 0.21
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.03
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.18
  },
  {
    'name': 'Total Chlorine',
    'value': 0.13
  },
  {
    'name': 'Free Chlorine',
    'value': 0.07
  }
]

const SampleChartNakasongola = () => {

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
        <h3>Nakasongola District</h3>
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
          <Dashboard district={'Nakasongola'}></Dashboard>
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

export default SampleChartNakasongola
