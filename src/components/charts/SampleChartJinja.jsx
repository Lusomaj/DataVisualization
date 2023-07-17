import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Bar, Line, PolarArea } from 'react-chartjs-2';
import D3PieChart from './d3PieChart';
import SampleLineChart from './SampleLineGraph';
import D3RadarChart from './D3RadarChart';
import { Col, Row } from 'react-bootstrap';
import Dashboard from '../d3/Dashboard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  BarElement,
  LineElement,
  RadialLinearScale,
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
      text: 'Jinja District',
    },
  },
};

const labels =  ['Electrical Conductivity (µs/cm)', 'pH (pH units)', 
'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 'Total Alkalinity (mg/L)', 'Total hardness (mg/L)', 
'Calcium Hardardness (mg/L)', 'Flouride (mg/L)', 'Nitrites (mg/L)', 
'Sulphate (mg/L)', 'Ammonium-N (mg/L)', 'Chloride (mg/L)', 'Phosphates-P (mg/L)', 
'Nitrates-N (mg/L)', 'Sodium (mg/L)', 'Potassium (mg/L)', 'Iron (mg/L)', 'Free Chlorine (mg/L)'];

/////Parameters for the single Polar Chart

const singleName = 'Kilikwani tap';
const singleDataSet = ['103', '6.9', '2.34', '22', '43', '33', '18', '0.26', 
'0.015', '4', '0.16', '5', '0.04', '0.32', '8.9', '3', '0.27', '0.02'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Kilikwani tap',
      data: ['103', '6.9', '2.34', '22', '43', '33', '18', '0.26', 
'0.015', '4', '0.16', '5', '0.04', '0.32', '8.9', '3', '0.27', '0.02'].map(Number.parseFloat)
,
      backgroundColor: ['rgb(235, 53, 53)', ],
    },
     {
      label: 'Ndiba Roseline tap',
      data: ['111', '6.7', '2.23', '20', '48', '35', '19', '0.23', 
'0.003', '4', '0.002', '5', '0.1', '2.49', '9.2', '3.2', '0.16', '0'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 235, 144)',
    },
    {
      label: 'Musisi bad man tap',
      data: ['101', '6.8', '2.92', '15', '41', '27', '19', '0.26', 
'0.008', '4', '0.04', '5', '0.06', '0.51', '8.5', '2.9', '0.34', '0.05'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(235, 53, 165)',
    },
    {
      label: 'Jinja college Borehole',
      data: ['648', '6.6', '2.12', '4', '175', 
'310', '125', '0.67', '0.007', '69', '0.002', '51', '1', '6.7', '11', '4', '0.07', null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(217, 235, 53)',
    },
     {
      label: 'Mpumudde mosque B/H',
      data: ['108', '5.2', '1.91', '3', 
'33', '27', '9.6', '0.06', '0.003', '4', '0.002', '3', '0.09', '4.79', '13', '3', '0.09'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(111, 235, 53)',
    },
    {
      label: 'Mawuta B/H C046',
      data: ['1393', '6.9', '6.25', '75', '350', '730', '400', '0.32', 
'0.014', '234', '0.002', '148', '0.12', '0.32', '16', '5.2', '0.29', null] 
.map(Number.parseFloat)
,
      backgroundColor: 'rgb(235, 187, 53)',
    },
     {
      label: 'Nsube B/H',
      data: ['492', '6.5', '1.91', '1', '230', '220', '105', '0.27', '0.007', 
'21', '0.002', '8', '0.05', '6.7', '20', '4', '0.31', null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(53, 235, 205)',
    },
    {
      label: 'Mutai S/W',
      data: ['292', '6', '1.85', '1', '91', '120', '60', '0.28', '0.004', 
'28', '0.04', '8', '0.11', '6.1', '17', '1.4', '0.15', null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(235, 53, 53)',
    },
     {
      label: 'Mutai police post tap',
      data: ['106', '6.7', '2.11', '11', '41', '36', '16', '0.29', 
'0.003', '5', '0.03', '6', '0.11', '0.51', '9.3', '3.1', '0.13', '0'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(56, 53, 235)',
    },
     {
      label: 'Kagoma protected spring',
      data: ['198', '5.4', '2.37', '6', '38', '62', '38', '0.05', 
'0.005', '15', '0', '13', '0.03', '7.6', '9.2', '5.1', '0.24', null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(57, 180, 0)',
    },
    {
      label: 'AGM Tap',
      data: ['104', '6.8', '2.43', '22', '46', '33', '20', '0.28', 
'0.036', '5', '0.12', '5', '0.03', '0.22', '8.9', '3.1', '0.24', '0.04'].map(Number.parseFloat)
,
      backgroundColor: 'rgb(235, 187, 53)',
    },
    
  ],
};

const pieChartDataSet = [
  {
    'name': 'Electrical Conductivity (µs/cm)',
    'value': 103
  },
  {
    'name': 'pH (pH units)',
    'value': 6.9
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 2.34
  },
  {
    'name': 'Color (Apparent) (PtCo.)',
    'value': 22
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 43
  },
  {
    'name': 'Total hardness (mg/L)',
    'value': 33
  },
  {
    'name': 'Calcium Hardardness (mg/L)',
    'value': 18
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.26
  },
  {
    'name': 'Nitrites (mg/L)',
    'value': 0.015
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 4
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.16
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 5
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.04
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 0.32
  },
  {
    'name': 'Sodium (mg/L)',
    'value': 8.9
  },
  {
    'name': 'Potassium (mg/L)',
    'value': 3
  },
  {
    'name': 'Iron (mg/L)',
    'value': 0.27
  },
  {
    'name': 'Free Chlorine (mg/L)',
    'value': 0.02
  }
]

const SampleChartJinja = () => {

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
        <h3>Jinja District</h3>
        <table>
  <tr>
    <th>Parameter</th>
    <th>water standards  </th>
    <th>Parameter</th>
    <th>water standards  </th>
    <th>Parameter</th>
    <th>water standards  </th>
    <th>Parameter</th>
    <th>water standards  </th>
  </tr>
  <tr>
    <td>Electrical Conductivity</td>
    <td>2500</td>
    <td>Total Alkalinity</td>
    <td>100-200</td>
    <td>Fluoride</td>
    <td>1.5</td>
    <td>Nitrites</td>
    <td>0.9</td>
  </tr>
  <tr>
    <td>pH</td>
    <td>5.5-9.5</td>
    <td>Total Hardness</td>
    <td>600</td>
    <td>Calcium Hardness</td>
    <td>600</td>
    <td>Sulphate</td>
    <td>400</td>
  </tr>
  <tr>
    <td>Turbidity</td>
    <td>25</td>
    <td>Color (Apparent)</td>
    <td>50</td>
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
          <Dashboard district={'Jinja'}></Dashboard>
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

export default SampleChartJinja
