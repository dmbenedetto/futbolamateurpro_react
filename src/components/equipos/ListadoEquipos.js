import React, {useContext, useEffect} from 'react';
import Equipo from './Equipo';
import EquipoContext from '../../context/proyectos/EquipoContext';

const ListadoEquipos = () => {

    //arreglo de nombres de equipos
    const equiposContext = useContext(EquipoContext);
    const { equipos, obtenerEquipos } = equiposContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        //window.alert("En useEffect de ListadoEquipos");
        obtenerEquipos();
        // eslint-disable-next-line
    }, []);

    if (equipos.length === 0) return <p>No hay Equipos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            {equipos.map(equipo => (
                <Equipo
                    key={equipo.id}
                    equipo={equipo}
                />
            ))}
        </ul>
    );
}
export default ListadoEquipos;