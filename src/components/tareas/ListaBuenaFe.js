import React from 'react';

const ListaBuenaFe = () => {
    return (
        <div className="form-usuario">
            <div calssName="contenedor-form sombra-dark">
                <h1>Nuevo Jugador</h1>
                <form
                    //onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="Cantidad Jugadores">Nombre</label>
                        <input
                            type="text"
                            id="cantjugadores"
                            name="cantjugadores"
                            placeholder="Cantidad de jugadores"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Temporada">Email</label>
                        <input
                            type="text"
                            id="temporada"
                            name="temporada"
                            placeholder="Ingrese el año"
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="Duracion del partido">Nombre</label>
                        <input
                            type="text"
                            id="duracionPartido"
                            name="duracionPartido"
                            placeholder="Duración partido"
                            //value={nombre}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Crear Lista" />
                    </div>
                </form>
            </div>
        </div>
        );
}

export default ListaBuenaFe;