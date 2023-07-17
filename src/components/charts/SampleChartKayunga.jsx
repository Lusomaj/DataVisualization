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
      text: 'Kayunga District',
    },
  },
};

const labels =  ['E.coli (CFU/100ml)', 'pH (pH units)', 
'Electrical Conductivtiy (µs/cm)', 'Turbidity (NTU)', 'Color (PtCo.)', 'Total Dissolved Solids (mg/L)', 
'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)', 'Total Hardness (mg/L)', 'Calcium Hardness (mg/L)', 
'magnesium Hardness (mg/L)', 'Sodium (mg/L)', 'Potassium (mg/L)', 'Flouride (mg/L)', 'Chloride (mg/L)', 
'Sulphate (mg/L)', 'Nitrites-N (mg/L)', 'Nitrates-N (mg/L)', 'Ammonium-N (mg/L)', 'Phosphates-P (mg/L)', 
'Total Chlorine', 'Free Chlorine'];



/////Parameters for the single Polar Chart

const singleName = 'Wampologma community b/hole DWD 59654';
const singleDataSet = ['1', '6.8', '785', '1.8', '0.2432', '549.5', 
'195', '237.9', '318.4', '149', '169.4', '30', '7.7', '0.8', '73', '80', '0.001', '0.82', 
'0.002', '0.03', null, null].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Wampologma community b/hole DWD 59654',
      data: ['1', '6.1', '220', '1.9', '0.2432', 
'154', '100', '122', '79', '68.8', '10.2', '14', '2', '0.22', '1.2', '7.8', '0.01', '1.43', '0.04', 
'0.08', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Bugonda community b/hole WDD 178',
      data: ['1', '6.8', '785', '1.8', '0.2432', '549.5', 
'195', '237.9', '318.4', '149', '169.4', '30', '7.7', '0.8', '73', '80', '0.001', '0.82', 
'0.002', '0.03', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Buganda borehole',
      data: ['1', '5.8', '756', '1.6', '0.2432', '529.2', '60', '73.2', 
'212.8', '112.2', '100.6', '55', '9.4', '0.15', '124', '91', '0.001', '5.49', '0.05', '0.02', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Namirembe village borehole WDD 782',
      data: ['1', '6', '317', '1.7', '0.2432', 
'221.9', '99', '120.78', '110.4', '53.2', '57.2', '16', '3.9', '0.42', '35', '1.6', '0.001', '2.35', 
'0.06', '0.05', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Nongo mosque borehole',
      data: ['1', '6', '272', '2.7', 
'0.2432', '190.4', '110', '134.2', '101.6', '69.8', '31.8', '13', '1.7', '0.24', '9.8', '2.3', 
'0.02', '4.13', '0.15', '0.1', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Budada borehole',
      data: ['1', '5.8', '566', '1.8', '1', '396.2', '600', '732', 
'158.6', '102.4', '56.2', '35', '10', '0.31', '100', '34', '0.001', '6.49', '0.05', '0.17', null, null]
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'Bulawula village b/hole WDD 9128',
      data: ['1', '6.2', '271', '1.8', '0.2432', 
'189.7', '130', '158.6', '132.2', '61', '71.2', '15', '4.1', '0.44', '1.6', '2.6', '0.001', '2.09', 
'0.09', '0.13', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Nkokonjeru p/sch borehole',
      data: ['1', '6', '260', '2.2', '11', '182', '66', 
'80.52', '74.4', '45.8', '28.6', '20', '3.4', '0.35', '28', '1.1', '0.001', '6.61', '0.08', '0.04', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'Busaana T/C H/qtrs borehole',
      data: ['1', '6.4', '483', '1.8', '0.2432', '338.1', 
'95', '115.9', '150', '89.8', '60.2', '29', '5.2', '0.38', '44', '16', '0.001', '20', '0.01', '0.24', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
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
    'value': 6.1
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 220
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.9
  },
  {
    'name': 'Color (PtCo.)',
    'value': 0.2432
  },
  {
    'name': 'Total Dissolved Solids (mg/L)',
    'value': 154
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 100
  },
  {
    'name': 'Bicarbonates (mg/L)',
    'value': 122
  },
  {
    'name': 'Total Hardness (mg/L)',
    'value': 79
  },
  {
    'name': 'Calcium Hardness (mg/L)',
    'value': 68.8
  },
  {
    'name': 'magnesium Hardness (mg/L)',
    'value': 10.2
  },
  {
    'name': 'Sodium (mg/L)',
    'value': 14
  },
  {
    'name': 'Potassium (mg/L)',
    'value': 2
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.22
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 1.2
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 7.8
  },
  {
    'name': 'Nitrites-N (mg/L)',
    'value': 0.01
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 1.43
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.04
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.08
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

const SampleChartKayunga = () => {

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
        <h3>Kayunga District</h3>
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
    <td>Color</td>
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
    <td>Sodium</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Potassium</td>
    <td>50</td>
    <td>Fluoride</td>
    <td>1.5</td>
    <td>Chloride</td>
    <td>250</td>
    <td>Sulphate</td>
    <td>400</td>
  </tr>
  <tr>
    <td>Nitrites-N</td>
    <td>0.9</td>
    <td>Nitrates-N</td>
    <td>10</td>
    <td>Ammonium-N</td>
    <td>0.5</td>
    <td>Phosphates-P</td>
    <td>0.7</td>
  </tr>
  <tr>
    <td>Total Chlorine</td>
    <td>-</td>
    <td>Free Chlorine</td>
    <td>-</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
      </Row>
      <Row className='graph-container'>
          <Dashboard district={'Kayunga'}></Dashboard>
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

export default SampleChartKayunga
