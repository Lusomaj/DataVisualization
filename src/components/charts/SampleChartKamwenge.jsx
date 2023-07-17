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
      text: 'Kamwenge District',
    },
  },
};

const labels =  ['E. Coli (CFU/100ml)', 'Turbidity (NTU)', 
'Field Temperature (oC)', 'Electrical Conductivtiy (µs/cm)', 'pH (pH units)', 'Total disolved solids (mg/L)', 
'Chloride (mg/L)', 'Sulphate (mg/L)', 'Ammonium-N (mg/L)', 'Nitrite-N (mg/L)', 'Nitrates-N (mg/L)', 
'Phosphate-P (mg/L)'];

/////Parameters for the single Polar Chart

const singleName = 'Aliganyira shallow well or Bangirana shallow well';
const singleDataSet = ['9', '1.24', 
'25', '76', '6.9', '53', '1.4', '9.7', '0', '0', null, null].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Aliganyira shallow well or Bangirana shallow well',
      data: ['9', '1.24', 
'25', '76', '6.9', '53', '1.4', '9.7', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Kihoima bore hole',
      data: ['1', '1.03', '23.1', '134.2', '7.1', '94', '1.3', 
'15.7', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Basaliza spring',
      data: ['108', '0.99', '23', '116.5', '7.38', '82', '1', '12.5', 
'0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Kamwenge College School  Tap',
      data: ['0.85', '24.9', '267', '7.35', 
'187', '8.6', '64.3', '0.1', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Machiro Primary School Tap',
      data: ['0.95', '23.7', '275', '7.41', '193', 
'9.3', '54.4', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Machiro Primary School BH',
      data: ['1', '0.96', '24', '64.7', '7.06', '45', '0.5', 
'6.2', '0', '0', null, null]
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'Agaba Waren Tap',
      data: ['1', '104', '24.3', '266', '7.53', '186', '8.8', 
'65.2', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Kishiza shallow well',
      data: ['36', '1.08', '24.2', 
'420', '7.87', '294', '9.9', '61.2', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'Bamurahura s/w',
      data: ['1', '1.13', '24.1', '323', '7.95', '226', '5.4', 
'31.5', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
    },
     {
      label: 'Nyamashegwa eremera BH ',
      data: ['1', '0.97', '24.3', '157.4', 
'7.65', '110', '1.5', '18.7', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(57, 180, 0, 0.575)',
    },
    {
      label: 'Bazerio musheroko shallow well',
      data: ['102', '1.1', '24.4', 
'562', '8.15', '393', '10.7', '103.5', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.89)',
    },
     {
      label: 'Bazerio musheroko shallow well.1',
      data: ['1', '1.1', '24.1', '284', 
'7.56', '199', '10.2', '58.2', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(218, 71, 186)',
    },
     {
      label: 'Bazerio musheroko shallow well.2',
      data: ['66', '1.02', '24.4', '357', '8.05', 
'250', '12.5', '31.7', '0', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 114, 0.986)',
    },
     {
      label: 'Mpongerurwimo psp',
      data: ['1', '0.85', 
'24.4', '271', '7.63', '190', '11.1', '66.6', '0.1', '0', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(74, 235, 53)',
    },
     {
      label: 'Kamagege shallow well',
      data: ['26', null, '328', '5.98', '230', '9', '44.3', '0', 
'0', '2', '0'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(0, 241, 201, 0.89)',
    },
    {
      label: 'Kinyonza protected spring',
      data: ['3', '1.5', null, '380', '6.36', 
'266', '15.2', '32', '0.1', '0', '2.4', '0.1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(241, 0, 92, 0.89)',
    },
     {
      label: 'Damasiko Primary School RAINTANK',
      data: ['1', '1.2', null, '7.87', '5.41', 
'6', '0.1', '1.1', '0.267', '0.003', '0.664', '0.117'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(241, 185, 0, 0.89)',
    },
      {
      label: 'Barungi protected spring',
      data: ['2', '3.25', null, '387', '6.14', '271', '4.9', 
'31.4', '0.029', '0.006', '0.868', '0.166'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(137, 241, 0, 0.89)',
    },
     {
      label: 'Rutooma protected spring',
      data: ['4', '4.1', null, '216.5', '5.94', '152', '2', '12.9', 
'0.023', '0.003', '3.492', '0.062'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(224, 102, 102, 0.932)',
    },
    
  ],
};

const pieChartDataSet = [
  {
    'name': 'E. Coli (CFU/100ml)',
    'value': 9
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.24
  },
  {
    'name': 'Field Temperature (oC)',
    'value': 25
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 76
  },
  {
    'name': 'pH (pH units)',
    'value': 6.9
  },
  {
    'name': 'Total disolved solids (mg/L)',
    'value': 53
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 1.4
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 9.7
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0
  },
  {
    'name': 'Nitrite-N (mg/L)',
    'value': 0
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': null
  },
  {
    'name': 'Phosphate-P (mg/L)',
    'value': null
  }
]

const SampleChartKamwenge = () => {

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
        <h3>Kamwenge District</h3>
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
    <td>E. Coli</td>
    <td>&lt;1</td>
    <td>Turbidity</td>
    <td>25</td>
    <td>Field Temperature</td>
    <td>_</td>
  </tr>
  <tr>
    <td>Electrical Conductivity</td>
    <td>2500</td>
    <td>pH</td>
    <td>5.5-9.5</td>
    <td>Total Dissolved Solids</td>
    <td>1500</td>
  </tr>
  <tr>
    <td>Chloride</td>
    <td>250</td>
    <td>Sulphate</td>
    <td>400</td>
    <td>Ammonium-N</td>
    <td>0.5</td>
  </tr>
  <tr>
    <td>Nitrite-N</td>
    <td>0.9</td>
    <td>Nitrates-N</td>
    <td>10</td>
    <td>Phosphates-P</td>
    <td>0.7</td>
  </tr>
</table>
      </Row>
      <Row className='graph-container'>
          <Dashboard district={'Kamwenge'}></Dashboard>
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
      <Col><D3PieChart dataset={pieChartDataSet} /> </Col>
      </Row>

    </Col>   
    </>
  )
}

export default SampleChartKamwenge
