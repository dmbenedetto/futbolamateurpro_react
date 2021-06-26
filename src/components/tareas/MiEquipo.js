import React, {useContext, Fragment} from 'react';
import EquipoContext from '../../context/proyectos/EquipoContext';

const MiEquipo = () => {

    //arreglo de nombres de equipos
    const equiposContext = useContext(EquipoContext);
    const { equipo } = equiposContext;


    //Array destructuring para extraer eñ equipo actual
    const [equipoActual] = equipo;

    return (
        <div className="listado-proyectos">
            <h2>Nombre del equipo:</h2>
            <h1>{equipoActual.nombre}</h1>
        </div>
    );
}
export default MiEquipo;