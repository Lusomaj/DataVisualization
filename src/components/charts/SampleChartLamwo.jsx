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
        boxHeight: 5,
        boxWidth: 5,
        pointStyle: 'circle',
        useBorderRadius: true,
        borderRadius: '50%'
      }
    },
    title: {
      display: true,
      text: 'Lamwo District',
    },
  },
};

const labels =  ['pH (pH units)', 'Electrical Conductivtiy (µs/cm)', 
'Turbidity (NTU)', 'Total dissolved solids (mg/L)', 'Sodium (mg/L)', 'Fluoride (mg/L)', 'Chloride (mg/L)', 
'Nitrate (mg/L)', 'Sulphate (mg/L)', 'Total hardness (mg/L)', 'Calcium hardness (mg/L)', 
'Magnesium hardness (mg/L)', 'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)'];

/////Parameters for the single Polar Chart

const singleName = 'Zone 4 &5 4980';
const singleDataSet =  ['7.28', '881', '0.14', '616.7', '116.3', '0.38', 
'6.75', '0.02', '2.47', '266.8', '83.6', '43.97', '524', '639.3'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Zone 4 &5 4980',
      data: ['7.28', '881', '0.14', '616.7', '116.3', '0.38', 
'6.75', '0.02', '2.47', '266.8', '83.6', '43.97', '524', '639.3'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Zone 4 &5 4980.1',
      data: ['7.29', '956', '0.23', '669.2', '130.6', 
'0.31', '5.31', '0.02', '2.33', '270.8', '70.4', '48.1', '468', '571'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Zone 4 &5 4980.2',
      data: ['7.33', '987', '0.88', '690.9', '106.8', 
'0.35', '5.32', '0.02', '2.85', '248.4', '124.8', '29.66', '524', '639.3'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Zone 1 Block 4',
      data: ['7.56', '727', '1.12', '508.9', '68.77', '0.468', '12.38', 
'5.57', '2.84', '296.8', '138.4', '38.02', '312', '380.6'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Zone 1 Block 4.1',
      data: ['7.37', '859', '6.12', '601.3', '67.79', '0.49', 
'11.14', '5.7', '2.43', '278.4', '46.8', '55.58', '440', '536.8'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Zone 5 Block 12',
      data: ['7.34', '865', '0.24', '605.5', '79.06', 
'0.38', '11.83', '0.02', '6.01', '369.6', '68', '72.38', '508', '619.8']
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'Zone 5 Block 12.1',
      data: ['7.59', '863', '6.18', '604.1', '78.23', 
'0.34', '12.25', '0.02', '6.23', '332.8', '91.6', '57.89', '420', '512.4'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Zone 5 Block 12.2',
      data: ['7.55', '874', '0.29', '611.8', '74.29', 
'0.66', '11.6', '0.02', '5.81', '360', '97.2', '63.07', '528', '644.2'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'Zone 5 Block 12.3',
      data: ['7.62', '817', '0.37', '571.9', '75.3', 
'0.98', '21.2', '0.02', '8.46', '338.8', '122', '52.03', '492', '600.2'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
    },
     {
      label: 'Zone 5 Block 12.4',
      data: ['7.72', '848', '0.42', '593.6', '77.77', 
'1.6', '17.4', '0.02', '7.52', '329.6', '100', '55.1', '472', '575.8'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 235, 150)',
    },
     {
      label: 'Nyalagala',
      data: ['7.05', '472', '0.18', '330.4', '24.6', '1.8', '0.81', 
'0.02', '8.14', '249.2', '102.4', '35.23', '260', '317.2'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 74, 53, 0.575)',
    },
     {
      label: 'Olug Olo 22365',
      data: ['6.63', '276', '397', '193.2', '18.65', 
'0.62', '0.68', '0.02', null, '142', '79.6', '14.98', '164', '200.1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 68, 0.877)',
    },
     {
      label: 'Nyalagala 37447',
      data: ['7.69', '472', '0.49', '330.4', '24.67', 
'1.28', '0.29', '0.02', '7.21', '249.6', '124.8', '29.95', '164', '200.1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 196, 0.575)',
    },
     {
      label: 'Olug Olo 22365.1',
      data: ['6.6', '280', '0.53', '196', '16.21', 
'0.682', '0.33', '0.02', null, '161.6', '64', '23.42', '240', '292.8'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(193, 53, 235, 0.575)',
    },
    {
      label: 'Pok Lengo',
      data: ['5.98', '56.1', '0.33', '39.27', '3.98', '1.29', 
'0.92', '2.11', null, '59.2', '49.2', '2.4', '164', '200.1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(172, 154, 0, 0.575)',
    },
    {
      label: 'Zone 4 Block 9',
      data: ['7.42', '805', '0.35', '563.5', '75.48', 
'0.6', '3.96', '2.02', '7.5', '336.8', '127.2', '50.3', '56', '68.3'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(112, 72, 35, 0.575)',
    },
     {
      label: 'Zone 4 Block 9.1',
      data: ['7.5', '799', '0.47', '559.3', '84.44', 
'0.25', '4.25', '0.02', '10.8', '288', '116.4', '41.18', '520', '634.4'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(0, 102, 255)',
    },
    {
      label: 'Zone 4 Block 9.2',
      data: ['7.33', '806', '0.39', '564.2', '81.56', 
'0.24', '4.16', '1.39', '10.06', '327.6', '104', '53.66', '372', '453.8'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(0, 255, 85)',
    },
     {
      label: 'Zone 4 Block 9.3',
      data: ['7.07', '808', '0.48', '565.6', '85.8', 
'0.25', '4.17', '0.02', '10.2', '287.2', '168.8', '28.42', '392', '478.2'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 208, 53, 0.986)',
    },
    {
      label: 'Zone 4 Block 10',
      data: ['7.54', '801', '0.22', '560.7', '82.9', 
'0.22', '4.19', '0.02', '9.53', '331.6', '155.6', '42.24', '436', '531.9'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(83, 199, 93, 0.575)',
    },
     {
      label: 'Zone 6 Block 6',
      data: ['7.09', '505', '0.28', '353.5', 
'33.03', '1.08', '4.27', '0.02', '2.11', '204', '51.6', '36.58', '400', '488'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(182, 27, 27, 0.575)',
    },
    {
      label: 'Zone 6 Block 6.1',
      data: ['7.15', '503', '0.32', '352.1', '35.37', 
'1.22', '4.87', '0.02', '1.93', '222', '58.4', '39.26', '272', '331.8'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(255, 217, 0, 0.575)',
    },
    {
      label: 'Zone 6 Block 6.2',
      data: ['6.95', '510', '0.38', '357', '34.24', '0.52', '4.42', 
'0.02', '2.05', '238.4', '61.6', '42.43', '280', '341.6'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(243, 148, 59, 0.575)',
    },
    {
      label: 'Zone 6 Block 6.3',
      data: ['7.03', '506', '0.32', '354.2', 
'34.94', '0.52', '4.41', '0.02', '1.91', '234.4', '67.6', '40.03', '312', '380.6'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 235, 196)',
    },
     {
      label: 'Zone 7 Block 8',
      data: ['8.22', '640', '0.26', '448', '54.97', '1.04', '13.35', 
'5.67', '4.6', '251.6', '69.2', '43.78', '284', '346.5'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(125, 255, 168, 0.575)',
    },
     {
      label: 'Ajagala 45571',
      data: ['7.81', '693', '0.4', '485.1', '64.42', '1.14', '10.96', 
'6.73', '3.78', '239.2', '122.4', '28.03', '324', '395.3'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(38, 167, 26, 0.575)',
    },
     {
      label: 'Block 8 Zone 7',
      data: ['7.07', '772', '0.72', '540.4', '54.93', '0.91', 
'10.88', '8.14', '4.69', '355.6', '39.6', '75.84', '352', '429.4'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(255, 37, 37, 0.575)',
    },
     {
      label: 'Ajagala 45571.1',
      data: ['7.83', '688', '0.24', '481.6', '62.1', '0.39', '10.89', 
'6.36', '3.74', '225.2', '45.6', '43.1', '400', '488'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(235, 53, 190)',
    },
     {
      label: 'Ajagala 45571.2',
      data: ['7.97', '683', '0.18', '478.1', '62.04', '1.11',
 '10.13', '6', '3.96', '256', '40.8', '51.65', '376', '458.7'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(119, 0, 255)',
    },
     {
      label: 'Ajaogala',
      data: ['7.48', '473', '0.22', '331.1', '31.2', '0.44', '2.32', 
 '1.77', '1.55', '231.6', '64.8', '40.03', '380', '463.6'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(202, 57, 57, 0.575)',
    },
    {
      label: 'Ajaogala.1',
      data: ['6.99', '841', '0.24', '588.7', '80.1', '1.17', '8.9', 
 '0.02', '4.31', '239.6', '32.4', '49.73', '280', '341.6'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(235, 96, 53)',
    },
     {
      label: 'Bwero Langwidi',
      data: ['6.78', '309', '6.11', '216.3', '29.6', '1.25', '5.15', 
 '1.43', '0.38', '102.8', '40.8', '14.88', '444', '541.7'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(158, 78, 78, 0.575)',
    },
     {
      label: 'Ajaogala.2',
      data: ['6.93', '357', '0.18', '249.9', '24.39', '1.56', '1.55', 
 '4.06', null, '91.2', '56.8', '8.26', '188', '229.4'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 223, 53, 0.726)',
    },
    {
      label: 'Block 7 Zone 7',
      data: ['7.03', '466', '0.22', '326.2', '31.4', '0.23', 
 '2.27', '1.91', '1.63', '171.6', '64.8', '25.63', '264', '322.1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(0, 255, 221, 0.575)',
    },
  ],
};

const pieChartDataSet = [
{
  'name': 'Electrical Conductivity (µs/cm)',
  'value': 881.0
},
{
  'name': 'pH (pH units)',
  'value': 7.28
},
{
  'name': 'Turbidity (NTU)',
  'value': 0.14
},
{
  'name': 'Total disolved solids (mg/l)',
  'value': 616.7
},
{
  'name': 'Sodium (mg/L)',
  'value': 116.3
},
{
  'name': 'Fluoride (mg/L)',
  'value': 0.38
},
{
  'name': 'Chloride (mg/L)',
  'value': 6.75
},
{
  'name': 'Nitrates-N (mg/L)',
  'value': 2.47
},
{
  'name': 'Sulphate (mg/L)',
  'value': 266.8
},
{
  'name': 'Total Hardness as CaCO3 (mg/l)',
  'value': 83.6
},
{
  'name': 'Calcium hardness as CaCO3 (mg/l)',
  'value': 43.97
},
{
  'name': 'Magnesium hardness as CaCO3 (mg/l)',
  'value': 524.0
},
{
  'name': 'Total Alkalinity (mg/l)',
  'value': 639.3
}
]

const SampleChartLamwo = () => {

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
        <h3>Lamwo District</h3>
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
    <td>pH</td>
    <td>5.5-9.5</td>
    <td>Electrical Conductivity</td>
    <td>2500</td>
    <td>Turbidity</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Total Dissolved Solids</td>
    <td>1500</td>
    <td>Sodium</td>
    <td>200</td>
    <td>Fluoride</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>Chloride</td>
    <td>250</td>
    <td>Nitrate</td>
    <td>10</td>
    <td>Sulphate</td>
    <td>400</td>
  </tr>
  <tr>
    <td>Total Hardness</td>
    <td>600</td>
    <td>Calcium Hardness</td>
    <td>600</td>
    <td>Magnesium Hardness</td>
    <td>600</td>
  </tr>
  <tr>
    <td>Total Alkalinity</td>
    <td>100-200</td>
    <td>Bicarbonates</td>
    <td>400</td>
    <td></td>
    <td></td>
  </tr>
</table>
      </Row>
      <Row className='graph-container'>
          <Dashboard district={'Lamwo'}></Dashboard>
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

export default SampleChartLamwo
