import React, {useContext, useState} from 'react';
//import Tab from "@material-ui/core/Tab";
//import Tabs from "@material-ui/core/Tabs";
import Jugadores from '../../tareas/Jugadores';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Tab,Sonnet,Nav,TabPane} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


/*
function ControlledTabs() {
    
    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    );
}
*/
const BootstrapTab = () => {
      
    //render(<ControlledTabs />);
    return (
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Home">
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Jugadores />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            </Tab>
        </Tabs>
    );
}
export default BootstrapTab;