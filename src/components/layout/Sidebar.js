import React from 'react';
import NuevoEquipo from '../equipos/NuevoEquipo';
import ListadoEquipos from '../equipos/ListadoEquipos';

const Sidebar = () => {

    return (
        <aside>
            <h1>Fútbol<span>Amateur</span>Pro</h1>
            <NuevoEquipo />
            <div className="proyectos">
                <h2>Tus Equipos</h2>
                <ListadoEquipos />
            </div>
        </aside>
    );
}
export default Sidebar;