import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Image } from 'react-bootstrap';
import User from './User';

const styles = {
  width: 240,
  height: '100%',
  display: 'inline-table',
  marginRight: 10
};
const SideNav = ({...navProps}) => {

  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);
  const [expanded, setExpand] = React.useState(true);
  const onExpand = ()=>{
    setExpand(!expanded)
  }
  return (
    <div style={styles}>
      <Sidenav
        appearance="inverse"
        expanded={expanded}
        openKeys={openKeys}
        activeKey={activeKey}
        onOpenChange={setOpenKeys}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            <div className='user-container'>
              <Nav.Item eventKey="2" icon={<User></User>} style={{paddingLeft: '0'}}>
              {/* <Image style={{ width: '60px', height: '60px', borderRadius: '50%'}} src='./images/Sudi.jpeg'></Image> */}
             <span className='user-name'> Murindanyi Sudi</span>
            </Nav.Item>
            <Nav.Item  eventKey="3"style={{paddingLeft: '0'}}>
              {/* <Image style={{ width: '60px', height: '60px', borderRadius: '50%'}} src='./images/Sudi.jpeg'></Image> */}
             <span className=''> 2022/HD05/5583X</span>
            </Nav.Item>
            <Nav.Item  eventKey="3"style={{paddingLeft: '0'}}>
              {/* <Image style={{ width: '60px', height: '60px', borderRadius: '50%'}} src='./images/Sudi.jpeg'></Image> */}
             <span className=''>2200705583</span>
            </Nav.Item>


            </div>
            
             <Nav.Item  eventKey="1" icon={<DashboardIcon></DashboardIcon>} style={{paddingLeft: '0'}}>
              {/* <Image style={{ width: '60px', height: '60px', borderRadius: '50%'}} src='./images/Sudi.jpeg'></Image> */}
             <span className='' style={{paddingLeft: '50px'}}> Dashboard</span>
            </Nav.Item>
            
          </Nav>
        </Sidenav.Body>
        
      </Sidenav>
    </div>
  )
}

export default SideNav
