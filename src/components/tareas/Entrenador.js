import React from 'react';

const Jugadores = () => {
    return (
        <div className="form-usuario">
            <div calssName="contenedor-form sombra-dark">
                <h1>Nuevo Entrenador</h1>
                <form
                    //onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="Nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Apellido">Nombre</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Apellido"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Correo">Email</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            placeholder="Correo"
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Telefono">Nombre</label>
                        <input
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="Telefono"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Direccion">Nombre</label>
                        <input
                            type="text"
                            id="direccion"
                            name="direccion"
                            placeholder="Direccion"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Fecha de Nacimiento">Nombre</label>
                        <input
                            type="text"
                            id="nacimiento"
                            name="nacimiento"
                            placeholder="Fecha de nacimiento"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Crear Entrenador" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Jugadores;