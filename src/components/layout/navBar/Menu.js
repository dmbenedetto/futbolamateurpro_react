/** 
import React, {useContext, useState} from 'react';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Jugadores from '../../tareas/Jugadores';

const Menu = () => {

    const [value, setValue] = useState(2);

    return (
        <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <Tab label="Active TAB One" />
            <Tab label="Active TAB Two" />
            <Tab label="Disabled Three!" disabled />
            <Tab label="Active Tab Four" />
            <Tab label="Active Tab Five" />
            <Tab label="Active Tab Six" />
        </Tabs>
    );
  /*
    const {menu} = useContext(MenuContext);
    const {cambiarMenu} = useContext(MenuContext);

    window.alert('Desde Menu este es el menu: ' + menu);

    */



    /*
    //otra forma de hacerlo
    const [equipo, guardarEquipo] = useState("")

    <nav className="nav-principal">
        <a href="#">Mi Equipo</a>
    </nav>
    */

    //cambiarMenu(1);
    
    /*
    const handleClick = (sel) => {
        console.log("handleclick " + sel);
        window.alert('menu dentro de handleclick: ' + menu);
        window.alert('sel dentro de handleclick: ' + sel);
        cambiarMenu(sel);
        window.alert('menu ahora dentro de handleclick: ' + menu);
    }
    
    return (
        <header className="app-menu">
            <a href="#" onClick = {() => handleClick(1)}> Mi Equipo </a>
            <a href="#" onClick = {() => handleClick(2)}> Jugadores </a>
            <a href="#" onClick = {() => handleClick(3)}> Plantel </a>
            <a href="#" onClick = {() => handleClick(4)}> Partidos </a>
            <a href="#" onClick = {() => handleClick(5)}> Formacion </a>
            <a href="#" onClick = {() => handleClick(6)}> Entrenamientos </a>
            <a href="#" onClick = {() => handleClick(7)}> Reportes </a>
        </header>
    );
    */
    const Menu = () => {
}
export default Menu;
