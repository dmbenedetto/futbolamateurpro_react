import { 
    FORMULARIO_EQUIPO,
    OBTENER_EQUIPOS,
    AGREGAR_EQUIPO,
    VALIDAR_FORMULARIO,
    EQUIPO_ACTUAL,
    ELIMINAR_EQUIPO
} from '../../types';

const fn = (state, action) => {
    switch(action.type) {
        case FORMULARIO_EQUIPO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_EQUIPOS:
            return {
                ...state,
                equipos: action.payload
            }
        case AGREGAR_EQUIPO:
            return {
                ...state,
                equipos: [...state.equipos, action.payload],
                formulario: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        case EQUIPO_ACTUAL:
            return {
                ...state,
                equipo: state.equipos.filter(equipo => equipo.id === action.payload)
            }
        case ELIMINAR_EQUIPO:
            return {
                ...state,
                equipos: state.equipos.filter(equipo => equipo.id !== action.payload),
                equipo: null
            }
        default:
            return state;
    }
}
export default fn;


/*
export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_EQUIPO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_EQUIPOS:
            return {
                ...state,
                proyectos: action.payload
            }
        default:
            return state;
    }
}
*/