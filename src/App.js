import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/styles/index.less'
import 'rsuite/dist/rsuite.min.css'
import './App.css';
import { InputPicker } from 'rsuite';

import SideNav from './components/SideNav';
import SampleChartBugweri from './components/charts/SampleChartBugweri';
import SampleChartBugiri from './components/charts/SampleChartBugiri';
import SampleChartBuikwe from './components/charts/SampleChartBuikwe';
import SampleChartKamwenge from './components/charts/SampleChartKamwenge';
import SampleChartIganga from './components/charts/SampleChartIganga';
import SampleChartJinja from './components/charts/SampleChartJinja';
import SampleChartKamuli from './components/charts/SampleChartKamuli';
import SampleChartKayunga from './components/charts/SampleChartKayunga'
import SampleChartNakasongola from './components/charts/SampleChartNakasongola';
import SampleChartLamwo from './components/charts/SampleChartLamwo';
import SampleChartLuuka from './components/charts/SampleChartLuuka';
import SampleChartLuwero from './components/charts/SampleChartLuwero';
import SampleChartMubende from './components/charts/SampleChartMubende';
import SampleChartMukono from './components/charts/SampleChartMukono';
import SampleChartNakaseke from './components/charts/SampleChartNakaseke';
import SampleChartWakiso from './components/charts/SampleChartWakiso'
import Example from './components/charts/SamplePieChart';




import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Dashboard from './components/d3/Dashboard';

const data = [
  'Bugiri',
  'Bugweri',
  'Buikwe',
  'Iganga',
  'Jinja',
  'Kamuli',
  'Kamwenge',
  'Kayunga',
  'Lamwo',
  'Luuka',
  'Luwero',
  'Mubende',
  'Mukono',
  'Nakaseke',
  'Nakasongola',
  'Wakiso',
].map(item => ({ label: item, value: item }));

function App() {

const [district, setDistrict] = useState('Bugiri')

const isBugiri = district === 'Bugiri'
const isBugweri = district === 'Bugweri'
const isBuikwe = district === 'Buikwe'
const isIganga = district === 'Iganga'
const isJinja = district === 'Jinja'
const isKamuli = district === 'Kamuli'
const isKamwenge = district === 'Kamwenge'
const isKayunga = district === 'Kayunga'
const isLamwo = district === 'Lamwo'
const isLuuka = district === 'Luuka'
const isLuwero = district === 'Luwero'
const isMubende = district === 'Mubende'
const isMukono = district === 'Mukono'
const isNakaseke = district === 'Nakaseke'
const isNakasongola = district === 'Nakasongola'
const isWakiso = district === 'Wakiso'

  return (
    <div className="App d-flex bd-highlight" style={{width: '100%'}}>
      <div className='side-nav'>
      <SideNav></SideNav>
      </div>
      <div className='main-content px-2 flex-grow-1 bd-highlight' style={{paddingTop: '50px !important'}}>
        <Row  style={{width: '100%', position: 'fixed', backgroundColor: '#1675e0', top: '0px', zIndex: '100', paddingTop: '6px'}}>
          <Col>
       
            <h3 style={{fontSize: '16px', color: '#fff', textTransform: 'uppercase'}}>Uganda Water Quality Data Visualization</h3>
          </Col>
          <Col className='sticky-header'>
        <InputPicker value={district} onChange={setDistrict} data={data} size='small' style={{width: 244}} placeholder='Select District'/>
          </Col>
        </Row>
        {isBugiri && <SampleChartBugiri></SampleChartBugiri> }
        {isBugweri && <SampleChartBugweri></SampleChartBugweri> }
        {isBuikwe && <SampleChartBuikwe></SampleChartBuikwe> }
        {isIganga && <SampleChartIganga></SampleChartIganga> }
        {isJinja && <SampleChartJinja></SampleChartJinja> }
        {isKamuli && <SampleChartKamuli></SampleChartKamuli> }
        {isKamwenge && <SampleChartKamwenge></SampleChartKamwenge> }
        {isKayunga && <SampleChartKayunga></SampleChartKayunga> }
        {isLamwo && <SampleChartLamwo></SampleChartLamwo> }
        {isLuuka && <SampleChartLuuka></SampleChartLuuka> }
        {isLuwero && <SampleChartLuwero></SampleChartLuwero> }
        {isMubende && <SampleChartMubende></SampleChartMubende> }
        {isMukono && <SampleChartMukono></SampleChartMukono> }
        {isNakaseke && <SampleChartNakaseke></SampleChartNakaseke> }
        {isNakasongola && <SampleChartNakasongola></SampleChartNakasongola> }
        {isWakiso && <SampleChartWakiso></SampleChartWakiso> }
        {/* <Example></Example> */}
         

      </div>

      
     
    </div>
  );
}

export default App;
