import React from 'react';

const Partidos = () => {
    return (
        <div className="form-usuario">
            <div calssName="contenedor-form sombra-dark">
                <h1>Nuevo Partido</h1>
                <form
                    //onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="Fecha">Nombre</label>
                        <input
                            type="text"
                            id="fecha"
                            name="fecha"
                            placeholder="fecha partido"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Horario">Email</label>
                        <input
                            type="text"
                            id="horario"
                            name="horario"
                            placeholder="Horario partido"
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Cancha">Password</label>
                        <input
                            type="text"
                            id="cancha"
                            name="cancha"
                            placeholder="Numero de Cancha"
                            //value={password}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Instancia">Confirmar Password</label>
                        <input
                            type="text"
                            id="instancia"
                            name="instancia"
                            placeholder="Instancia del campeonato"
                            //value={confirmar}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Entrenador">Confirmar Password</label>
                        <input
                            type="text"
                            id="entrenador"
                            name="entrenador"
                            placeholder="Nombre entrenador"
                            //value={confirmar}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Rival">Confirmar Password</label>
                        <input
                            type="text"
                            id="rival"
                            name="rival"
                            placeholder="Nombre rival"
                            //value={confirmar}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Crear Partido" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Partidos;