import React from 'react'
import D3PieChart from './d3PieChart';

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
import { Row } from 'rsuite';
import SampleLineChart from './SampleLineGraph';
import D3RadarChart from './D3RadarChart';
import { Col } from 'react-bootstrap';
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
      text: 'Bugweri District',
    },
  },
};

const labels =  [
                "Field Temperature", "Dissolved Oxygen", "Turbidity", "Colour (Apparent)",
                "pH", "Electrical Conductivity", "Total disolved solids",
                "Total Hardness as CaCO3", "Calcium hardness as CaCO3",
                "Magnesium hardness as CaCO3", "Calcium", "Magnesium", "Sodium",
                "Potassium", "Total Alkalinity", "Bicarbonates", "Fluoride",
                "Sulphates", "Chlorides", "Nitrates as N", "Nitrites as N",
                "Ammonium as N", "Phosphates as P", "Silica", "Mercury",
                "Lead", "E.coli"
            ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Makuutu subcounty borehole Results',
      data: [
                27, 5.1, 1.76, 0.5, 6.5, 359, 251, 160, 126, 34, 50, 8, 15, 5.2,
                152, 185, 0.09, 16.1, 2.8, 6.48, 0.0015, 0.006, 0.112, 53.2, 0.001,
                0.015, 1
            ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Busiimo Pri School Borehole Results',
      data: [
                28, 5.1, 1.95, 0.5, 6.4, 175, 123, 50, 30, 20, 12, 5, 16, 5.3, 50,
                61, 0.09, 7.4, 7.1, 6.92, 0.0015, 0.004, 0.107, 51.8, 0.001, 0.015,
                1
            ],
      backgroundColor: 'rgba(105, 235, 53, 0.5)',
    },
  ],
};

/////Parameters for the single Polar Chart

const singleName = 'Makuutu subcounty borehole Results';
const singleDataSet = [
                27, 5.1, 1.76, 0.5, 6.5, 359, 251, 160, 126, 34, 50, 8, 15, 5.2,
                152, 185, 0.09, 16.1, 2.8, 6.48, 0.0015, 0.006, 0.112, 53.2, 0.001,
                0.015, 1
            ];
const singleLebels =  [
                "Field Temperature", "Dissolved Oxygen", "Turbidity", "Colour (Apparent)",
                "pH", "Electrical Conductivity", "Total disolved solids",
                "Total Hardness as CaCO3", "Calcium hardness as CaCO3",
                "Magnesium hardness as CaCO3", "Calcium", "Magnesium", "Sodium",
                "Potassium", "Total Alkalinity", "Bicarbonates", "Fluoride",
                "Sulphates", "Chlorides", "Nitrates as N", "Nitrites as N",
                "Ammonium as N", "Phosphates as P", "Silica", "Mercury",
                "Lead", "E.coli"
            ];

/////Parameters for the single Polar Chart End

const pieChartDataSet = [
  {
    'name': 'Field Temperature (oC)',
    'value': 27
  },
  {
    'name': 'Dissolved Oxygen (mg/L)',
    'value': 5.1
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.76
  },
  {
    'name': 'Colour (Apparent) (PtCo)',
    'value': 0.5
  },
  {
    'name': 'pH (pH units)',
    'value': 6.5
  },
  {
    'name': 'Electrical Conductivity (µS/cm)',
    'value': 359
  },
  {
    'name': 'Total disolved solids (mg/l)',
    'value': 251
  },
  {
    'name': 'Total Hardness as CaCO3 (mg/l)',
    'value': 160
  },
  {
    'name': 'Calcium hardness as CaCO3 (mg/l)',
    'value': 126
  },
  {
    'name': 'Magnesium hardness as CaCO3 (mg/l)',
    'value': 34
  },
  {
    'name': 'Calcium (mg/l)',
    'value': 50
  },
  {
    'name': 'Magnesium hardness as CaCO3 (mg/l)',
    'value': 8
  },
  {
    'name': 'Sodium (mg/l)',
    'value': 15
  },
  {
    'name': 'Potassium (mg/l)',
    'value': 5.2
  },
  {
    'name': 'Total Alkalinity (mg/l)',
    'value': 152
  },
  {
    'name': 'Bicarbonates (mg/l)',
    'value': 185
  },
  {
    'name': 'Fluoride (mg/l)',
    'value': 0.09
  },
  {
    'name': 'Sulphates (mg/l)',
    'value': 16.1
  },
  {
    'name': 'Chlorides (mg/l)',
    'value': 2.8
  },
  {
    'name': 'Nitrates as N (mg/l)',
    'value': 6.48
  },
  {
    'name': 'Nitrites as N (mg/l)',
    'value': 0.0015
  },
  {
    'name': 'Ammonium as N (mg/l)',
    'value': 0.006
  },
  {
    'name': 'Phosphates as P (mg/l)',
    'value': 0.112
  },
  {
    'name': 'Silica (mg/l)',
    'value': 53.2
  },
  {
    'name': 'Mercury (mg/l)',
    'value': 0.001
  },
  {
    'name': 'Lead (mg/l)',
    'value': 0.015
  },
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 1
  }
]

const SampleChartBugweri = () => {

  return ( <>
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
        <h3>Bugweri District</h3>
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
    <td>Colour (Apparent)</td>
    <td>50</td>
  </tr>
  <tr>
    <td>pH</td>
    <td>5.5-9.5</td>
    <td>Electrical Conductivity</td>
    <td>2500</td>
    <td>Total Dissolved Solids</td>
    <td>1500</td>
    <td>Total Hardness as CaCO3</td>
    <td>600</td>
  </tr>
  <tr>
    <td>Calcium hardness as CaCO3</td>
    <td>600</td>
    <td>Magnesium hardness as CaCO3</td>
    <td>600</td>
    <td>Calcium</td>
    <td>150</td>
    <td>Magnesium</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Sodium</td>
    <td>200</td>
    <td>Potassium</td>
    <td>50</td>
    <td>Total Alkalinity</td>
    <td>100-200</td>
    <td>Bicarbonates</td>
    <td>400</td>
  </tr>
  <tr>
    <td>Fluoride</td>
    <td>1.5</td>
    <td>Sulphates</td>
    <td>400</td>
    <td>Chlorides</td>
    <td>250</td>
    <td>Nitrates as N</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Nitrites as N</td>
    <td>0.9</td>
    <td>Ammonium as N</td>
    <td>0.5</td>
    <td>Phosphates as P</td>
    <td>0.7</td>
    <td>Silica</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Mercury</td>
    <td>0.001</td>
    <td>Lead</td>
    <td>0.01</td>
    <td>E.coli</td>
    <td>&lt;1</td>
    <td></td>
    <td></td>
  </tr>
</table>
      </Row>
      <Row className='graph-container'>
          <Dashboard district={'Bugweri'}></Dashboard>
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
               <h3>Radar Chart</h3>
      </Row>
      <Row className='graph-container'>
         <D3RadarChart options={options} dataset={singleDataSet} name={singleName } lebels={singleLebels}></D3RadarChart>
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
        <h3>Pie Chart</h3>
      </Row>
      <Row className='graph-container'>
        <Col>
    <D3PieChart dataset={pieChartDataSet} />
        </Col>
      </Row>

    </Col>

    {/* <D3PieChart dataset={pieChartDataSet} /> */}
   
    </>

  )
}

export default SampleChartBugweri
