import React, { useContext } from 'react';
import EquipoContext from '../../context/proyectos/EquipoContext';

const Equipo = ({equipo}) => {

    //arreglo de nombres de equipos
    const equiposContext = useContext(EquipoContext);
    const { equipoActual } = equiposContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => equipoActual(equipo.id)}
            >{equipo.nombre}</button>
        </li>
    );
}
export default Equipo;