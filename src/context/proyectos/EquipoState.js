import React, {useReducer} from 'react';
import EquipoContext from './EquipoContext';
import EquipoReducer from './EquipoReducer';
import {
    FORMULARIO_EQUIPO,
    OBTENER_EQUIPOS,
    AGREGAR_EQUIPO,
    VALIDAR_FORMULARIO,
    EQUIPO_ACTUAL,
    ELIMINAR_EQUIPO
} from '../../types';
import { v4 as uuid } from 'uuid';

const EquipoState = props => {
    
    //hardcodeamos los equipos a los cuales tengo acceso
    const equipos = [
        {id: 1, nombre: 'Equipo1'},
        {id: 2, nombre: 'Equipo2'},
        {id: 3, nombre: 'Equipo3'},
        {id: 4, nombre: 'MERN'}
    ]
   
    //este es el state inicial
    const initialSate = {
        equipos : [],
        formulario : false,
        errorFormulario : false,
        equipo : null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(EquipoReducer, initialSate)

    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch ({
            type: FORMULARIO_EQUIPO
        })
    }

    //Obtener los proyectos
    const obtenerEquipos = () => {
        dispatch({
            type: OBTENER_EQUIPOS,
            payload: equipos
        })
    }

    //Agregar nuevo equipo
    const agregarEquipo = equipo => {
        equipo.id = uuid();

        //Insertar el equipo en el state
        dispatch({
            type: AGREGAR_EQUIPO,
            payload: equipo
        })
    }

    //Valida el fomrulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el equipo que el usuario dio click
    const equipoActual = equipoId => {
        dispatch({
            type: EQUIPO_ACTUAL,
            payload: equipoId
        })
    }

    //Elimina un equipo
    const eliminarEquipo = equipoId => {
        dispatch({
            type: ELIMINAR_EQUIPO,
            payload: equipoId
        })
    }

    return (
        <EquipoContext.Provider
            value={{
                equipos: state.equipos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                equipo: state.equipo,
                mostrarFormulario,
                obtenerEquipos,
                agregarEquipo,
                mostrarError,
                equipoActual,
                eliminarEquipo
            }}
        >
            {props.children}            
        </EquipoContext.Provider>
    )
}
export default EquipoState;
