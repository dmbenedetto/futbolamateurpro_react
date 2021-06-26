import React from 'react';

const Jugadores = () => {
    return (
        <div className="form-usuario">
            <div calssName="contenedor-form sombra-dark">
                <h1>Nuevo Jugador</h1>
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
                        <label htmlFor="Telefono Alterno">Nombre</label>
                        <input
                            type="text"
                            id="telefonoAlt"
                            name="telefonoAlt"
                            placeholder="Telefono alterno"
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
                        <label htmlFor="Puesto">Nombre</label>
                        <input
                            type="text"
                            id="puesto"
                            name="puesto"
                            placeholder="Puesto principal"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Puesto Alterno">Nombre</label>
                        <input
                            type="text"
                            id="puestoAlt"
                            name="puestoAlt"
                            placeholder="Puesto alterno"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Perfil">Nombre</label>
                        <input
                            type="text"
                            id="perfil"
                            name="perfil"
                            placeholder="Perfil"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Tipo">Nombre</label>
                        <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            placeholder="Tipo de jugador"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Crear jugador" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Jugadores;