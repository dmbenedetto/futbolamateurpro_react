import React, { Fragment, useState, useContext} from 'react';
import EquipoContext from '../../context/proyectos/EquipoContext';

const NuevoEquipo = () => {

    //obtener el state del formulario
    const EquiposContext = useContext(EquipoContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarEquipo, mostrarError } = EquiposContext;

    //State para el equipo
    const [equipo, guardarEquipo] = useState({
        nombre: ''
    });

    //Extraer nombre del state equipo
    const {nombre} = equipo;

    //Lee el contenido del input con el nombre del nuevo equipo
    const onChangeEquipo = e => {
        guardarEquipo ({
            ...equipo,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia un Equipo
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Cuando enviemos el form, esto es lo que haremos:
        //validar equipo
        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarEquipo(equipo)

        //reiniciar el form
        guardarEquipo({
            nombre: ''
        })
    }

    //Mostrar formulario
    const onCLickFormulario = () => {
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onCLickFormulario}
            >Nuevo Equipo</button>
            
            { formulario ?
                (
                    <form className ="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Equipo"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeEquipo}
                        />
                        <input
                            type="submit"
                            className="btn btn-block btn-primario"
                            value="Agregar Equipo"
                        />
                    </form>
                ) : null }
            { errorFormulario ? <p className="mensaje error">El nombre del equipo es
            obligatorio</p> : null }
        </Fragment> 
    );
}
export default NuevoEquipo;