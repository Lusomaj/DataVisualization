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
      text: 'Nakaseke District',
    },
  },
};

const labels =  ['E.coli (CFU/100ml)', 'pH (pH units)', 
'Electrical Conductivtiy (µs/cm)', 'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 
'Total Dissolved Solids (mg/L)', 'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)', 
'Total Hardness (mg/L)', 'Calcium Hardness (mg/L)', 'Magnesium Hardness (mg/L)', 
'Flouride (mg/L)', 'Chloride (mg/L)', 'Sulphates (mg/L)', 'Nitrites-N (mg/L)', 
'Nitrates-N (mg/L)', 'Ammonium-N (mg/L)', 'Phosphates-P (mg/L)', 'Total Chlorine', 'Free Chlorine'];


/////Parameters for the single Polar Chart

const singleName =  'Bulyake village borehole - DWD 32323';
const singleDataSet =  ['1', '6', '235', '13', '7', '164.5', 
'78', '95.16', '69', '38', '31', '0.21', '5.45', '17.79', '0.01', '1.48', '0.2', '0.2', null, null].map(Number.parseFloat);

/////Parameters for the single Polar Chart End
export const data = {
  labels,
  datasets: [
     {
      label: 'Bulyake village borehole - DWD 32323',
      data: ['1', '6', '235', '13', '7', '164.5', 
'78', '95.16', '69', '38', '31', '0.21', '5.45', '17.79', '0.01', '1.48', '0.2', '0.2', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Namasujja A community borehole',
      data: ['1', '5.61', '264', '3', '0.2432', '184.8', 
'48', '58.56', '90.2', '28.8', '61.4', '1.1', '26.99', '9.6', '0.01', '2.07', '0.03', '0.21', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Namasujja parents P/school borehole',
      data: ['1', '5.31', '126.7', '1.9', '0.2432', 
'88.69', '17', '20.74', '26', '12.2', '13.8', '0.2', '3.57', '5.92', '0.02', '0.95', '0.07', '0.17', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Kaasangombe community borehole',
      data: ['1', '6.47', '287', '1.6', '0.2432', '200.9', 
'105', '128.1', '120', '41.2', '78.8', '0.18', '11.17', '11.21', '0.01', '5.64', '0.09', '0.18', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Nambega village borehole',
      data: ['1', '6.72', '259', '9.3', '39', '181.3', '105', '128.1', 
'80.6', '63.4', '17.2', '0.22', '9.1', '15.13', '0', '7.01', '0.07', '0.26', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Nakaseke community borehole',
      data: ['1', '5.73', '252', '2', '0.2432', '176.4', '54', 
'65.88', '60.2', '36', '24.2', '0.58', '4.87', '-0.1', '0', '4.74', '0.02', '0.2', null, null]
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'St. Joseph Kiziba R/C P/School borehole',
      data: ['1', '6.31', '151.4', '7.6', '0.2432', 
'105.98', '51', '62.22', '41.6', '18.4', '23.2', '0.21', '5.19', '16.87', '0.01', '1.4', '0.05', 
'0.17', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Lufula zone community borehole',
      data: ['1', '6.85', '507', '2.1', '0.2432', 
'354.9', '195', '237.9', '153.8', '65.8', '88', '1.08', '27.59', '37.66', '0.01', '2.15', '0.08', 
'0.19', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'St. Paul COU borehole',
      data: ['1', '5.84', '160.5', '21', '1', '112.35', '65', 
'79.3', '154.2', '67.4', '86.8', '0.23', '3.76', '10.4', '0.02', '0.82', '0.1', '0.17', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
    },
     {
      label: 'Mosque Shallow well',
      data: ['9', '5.75', '157.8', '3.1', '11', '110.46', '34', '41.48', 
'42', '14.6', '27.4', '0.19', '10.84', '10.38', '0.01', '4.45', '0.07', '0.15', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 235, 150)',
    },
     {
      label: 'Kasambya village shallow well',
      data: ['32', '5.81', '70', '12', '210', '49', '19', 
'23.18', '43.8', '15.8', '28', '0.1', '6.41', '2.63', '0', '1.44', '0.07', '0.22', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 74, 53, 0.575)',
    },
     {
      label: 'Kasambya A village shallow well',
      data: ['1', '5.85', '188.6', '2.7', '12', '132.02', 
'70', '85.4', '27.6', '6.2', '21.4', '0.2', '7.6', '1.14', '0.01', '2.36', '0.05', '0.2', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 68, 0.877)',
    },
     {
      label: 'Kamuli community P/Sch. Borehole',
      data: ['1', '5.77', '203.2', '1.9', '8', '142.24', 
'53', '64.66', '47.2', '23.2', '24', '0.23', '9.03', '15.57', '0', '6.24', '0.05', '0.25', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 196, 0.575)',
    },
     {
      label: 'Nakazzi lugo lumpweo borehole',
      data: ['1', '6.84', '208.3', '4', '18', 
'145.81', '81', '98.82', '64.8', '25.4', '39.4', '0.61', '4.94', '0.47', '0', '4.75', '0.08', '0.28', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(193, 53, 235, 0.575)',
    },
    {
      label: 'Uganda Matyrs Catholic parish borehole',
      data: ['1', '6.25', '249', '1.2', '1', 
'174.3', '105', '128.1', '66', '31.8', '34.2', '0.39', '3.53', '21.21', '0', '1.46', '0.03', '0.27', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(235, 53, 123)',
    },
     {
      label: 'Kiwoko borehole',
      data: ['1', '6.92', '240', '3.8', '14', '168', '62', 
'75.64', '79.2', '39.2', '40', '0.18', '6.6', '33.75', '0.01', '7.43', '-0.01', '0.15', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(208, 235, 53)',
    },
    {
      label: 'Kiwoko cenetral borehole',
      data: ['1', '6.2', '347', '2.1', '4', '242.9', '92', 
'112.24', '56', '32.2', '23.8', '0.27', '11.57', '26.34', '0.01', '8.96', '0.04', '0.25', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 147, 235)',
    },
     {
      label: 'Magoma R/C P/School borehole - DWD 51413',
      data: ['1', '6.54', '166.6', '1.8', '3', 
'116.62', '55', '67.1', '101.2', '48.2', '53', '0.26', '0.88', '24.82', '0.01', '2.47', '0.03', '0.31', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(126, 38, 72, 0.575)',
    },
  ],
};

const pieChartDataSet = [
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 1
  },
  {
    'name': 'pH (pH units)',
    'value': 6
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 235
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 13
  },
  {
    'name': 'Color (Apparent) (PtCo.)',
    'value': 7
  },
  {
    'name': 'Total Dissolved Solids (mg/L)',
    'value': 164.5
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 78
  },
  {
    'name': 'Bicarbonates (mg/L)',
    'value': 95.16
  },
  {
    'name': 'Total Hardness (mg/L)',
    'value': 69
  },
  {
    'name': 'Calcium Hardness (mg/L)',
    'value': 38
  },
  {
    'name': 'Magnesium Hardness (mg/L)',
    'value': 31
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.21
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 5.45
  },
  {
    'name': 'Sulphates (mg/L)',
    'value': 17.79
  },
  {
    'name': 'Nitrites-N (mg/L)',
    'value': 0.01
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 1.48
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.2
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.2
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

const SampleChartNakaseke = () => {

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
        <h3>Nakaseke District</h3>
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
          <Dashboard district={'Nakaseke'}></Dashboard>
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

export default SampleChartNakaseke
