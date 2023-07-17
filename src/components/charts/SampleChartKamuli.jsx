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
      text: 'Kamuli District',
    },
  },
};

const labels =  ['E.coli (CFU/100ml)', 'pH (pH units)', 
'Electrical Conductivtiy (µs/cm)', 'Turbidity (NTU)', 'Color (PtCo.)', 'Total Dissolved Solids (mg/L)', 
'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)', 'Total Hardness (mg/L)', 'Calcium Hardness (mg/L)', 
'magnesium Hardness (mg/L)', 'Sodium (mg/L)', 'Potassium (mg/L)', 'Flouride (mg/L)', 'Chloride (mg/L)', 
'Sulphate (mg/L)', 'Nitrites-N (mg/L)', 'Nitrates-N (mg/L)', 'Ammonium-N (mg/L)', 'Phosphates-P (mg/L)', 
'Total Chlorine', 'Free Chlorine'];

const singleName = 'Kasowole P/Sch borehole DWD 86267';
const singleDataSet = ['8', '6.4', '552', '2.1', '0.2432', 
'386.4', '190', '231.8', '156.4', '98.8', '57.6', '54', '5.5', '0.55', '20', '61', '0.01', '3.65', 
'0.07', '0.19', null, null].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Kasowole P/Sch borehole DWD 86267',
      data: ['8', '6.4', '552', '2.1', '0.2432', 
'386.4', '190', '231.8', '156.4', '98.8', '57.6', '54', '5.5', '0.55', '20', '61', '0.01', '3.65', 
'0.07', '0.19', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Namusita Buyima community b/hole DWD 66233',
      data: ['1', '6.1', '276', '1.7', 
'0.2432', '193.2', '115', '140.3', '82', '47.4', '34.6', '26', '2.6', '0.52', '3.2', '15', '0.001', 
'2.82', '0.04', '0.14', 'ND', 'ND'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Busuna shallow well',
      data: ['78', '5.7', '230', '2.8', '13', '161', '37', 
'45.14', '40.4', '23', '17.4', '25', '7.4', '0.21', '14', '26', '0.01', '4.37', '0.12', '0.01', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Namuyinji HC II borehole',
      data: ['1', '6.4', '530', '1.9', '0.2432', 
'371', '110', '134.2', '166.8', '93.6', '73.2', '31', '3.9', '0.5', '72', '9.4', '0.01', 
'3.1', '0.02', '0.09', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Bulindi shallow well',
      data: ['1', '5.1', '129', '2.4', '0.2432', 
'90.3', '14', '17.08', '26.2', '13.4', '12.8', '6.8', '16', '0.23', '0.9', '18', 
'0.001', '6.1', '0.05', '0.01', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Namaganda shallow well',
      data: ['1', '5.4', '184', '1.8', '0.2432', 
'128.8', '21', '25.62', '29.4', '20.6', '8.8', '22', '2.3', '0.17', '13', '22', '0.001', 
'3.52', '0.02', '0.05', null, null] 
.map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'Naminage community borehole DWD 28947',
      data: ['1', '6.2', '621', '2.1', '1', 
'434.7', '150', '183', '238', '82', '156', '29', '4.2', '0.4', '48', '39', '0.1', '29', 
'0.05', '0.11', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 205, 0.575)',
    },
    {
      label: 'Kitayundwa community borehole',
      data: ['1', '6.6', '576', '1.8', 
'0.2432', '403.2', '240', '292.8', '254.8', '188', '66.8', '25', '2.2', '0.34', 
'7.2', '44', '0.001', '8.72', '0.08', '0.12', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.575)',
    },
     {
      label: 'Kitayundwa shallow well',
      data: ['10', '6.5', '571', '2.5', '4', 
'399.7', '175', '213.5', '210.2', '128.6', '81.6', '31', '5.5', '0.24', '27', '26', 
'0.01', '13', '0.01', '0.01', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(56, 53, 235, 0.575)',
    },
     {
      label: 'Namisambya shalllow well',
      data: ['1', '5.9', '131', '1.7', '0.2432', 
'91.7', '16', '19.52', '30.4', '21.2', '9.2', '6.9', '7.8', '0.1', '7.1', '6.7', '0.001', 
'6.12', '0.27', '0.02', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(57, 180, 0, 0.575)',
    },
    {
      label: 'Namisambya community borehole',
      data: ['1', '5.8', '557', '1.8', '0.2432', 
'389.9', '74', '90.28', '146.4', '79.2', '67.2', '46', '5.6', '0.23', '55', '115', '0.01', '3.2', 
'0.002', '0.1', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 187, 53, 0.89)',
    },
     {
      label: 'Bukwenge COU borehole',
      data: ['1', '6.2', '434', '1.8', '0.2432', '303.8', '85', 
'103.7', '120.4', '77.4', '43', '47', '6.4', '0.34', '28', '38', '0.001', '11', '0.18', '0.19', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(218, 71, 186)',
    },
     {
      label: 'NWSC Kamuli resovior (final treated water)',
      data: ['1', '6.9', '716', '1.8', '2', '501.2', 
'130', '158.6', '215.6', '123.2', '92.4', '55', '7.3', '0.64', '110', '16', 
'0.01', '2.63', '0.19', '0.1', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 114, 0.986)',
    },
     {
      label: 'community borehole',
      data: ['1', '6', '162', '1.7', '0.2432', '113.4', 
'53', '64.66', '42.4', '23.2', '19.2', '15', '3', '0.27', '9.2', '5.6', '0.01', '2.57', '0.08', 
'0.3', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgb(74, 235, 53)',
    },
     {
      label: 'Busobya community borehole',
      data: ['1', '5.8', '161', '1.6', '0.2432', 
'112.7', '52', '63.44', '33.8', '20', '13.8', '17', '2.8', '0.32', '4.5', 
'2.2', '0.01', '5.99', '0.05', '0.1', null, null].map(Number.parseFloat)
,
      backgroundColor: 'rgba(0, 241, 201, 0.89)',
    },
    
  ],
};

const pieChartDataSet = [
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 8
  },
  {
    'name': 'pH (pH units)',
    'value': 6.4
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 552
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 2.1
  },
  {
    'name': 'Color (PtCo.)',
    'value': 0.2432
  },
  {
    'name': 'Total Dissolved Solids (mg/L)',
    'value': 386.4
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 190
  },
  {
    'name': 'Bicarbonates (mg/L)',
    'value': 231.8
  },
  {
    'name': 'Total Hardness (mg/L)',
    'value': 156.4
  },
  {
    'name': 'Calcium Hardness (mg/L)',
    'value': 98.8
  },
  {
    'name': 'magnesium Hardness (mg/L)',
    'value': 57.6
  },
  {
    'name': 'Sodium (mg/L)',
    'value': 54
  },
  {
    'name': 'Potassium (mg/L)',
    'value': 5.5
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.55
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 20
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 61
  },
  {
    'name': 'Nitrites-N (mg/L)',
    'value': 0.01
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 3.65
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.07
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.19
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

const SampleChartKamuli = () => {

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
        <h3>Kamuli District</h3>
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
          <Dashboard district={'Kamuli'}></Dashboard>
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

export default SampleChartKamuli
