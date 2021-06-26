import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
//import Menu from '../layout/navBar/Menu';
//import SimpleTabs from '../layout/navBar/SimpleTabs';
//import CommonTabs from '../layout/navBar/CommonTabs';
//import TabOne from '../layout/navBar/TabOne';
//import FullWidthTabs from '../layout/navBar/FullWidthTabs';
//import BootstrapNav from '../layout/navBar/BootstrapNav';
//import BootstrapTab from '../layout/navBar/BootstrapTab';
import ReactTabs from '../layout/navBar/ReactTabs';

const Equipos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <ReactTabs />
                </main>
            </div>
        </div>
    );
}
export default Equipos;