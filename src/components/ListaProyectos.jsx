import proyectoService from "../services/proyectoService";
import { useState } from "react";
import logo2 from "../assets/logo2.png";

const ListaProyectos = () => {
const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos()
);
const [textoBusqueda, setTextoBusqueda] = useState("");
const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "En curso"
});
const proyectosFiltrados =
    textoBusqueda === "" ? proyectos: proyectoService.buscarProyecto(textoBusqueda);
const handleBuscar = (e) => {
    setTextoBusqueda(e.target.value);
};
const handleChange = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    });
};
const handleAgregarProyecto = () => {
    proyectoService.agregarProyecto({
        id: Date.now(),
        ...formulario
    });
    setProyectos(proyectoService.obtenerProyectos());
    setFormulario({
        titulo: "",
        categoria: "",
        estado: "En curso"
    });
};

const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
};

return (
    <div id="listado-proyectos">
        <h2>Lita de Proyectos Educativos</h2>
        <input
            className="input-busqueda"
            type="text"
            placeholder="Buscar proyecto..."
            value={textoBusqueda}
            onChange={handleBuscar}
        />
        <div className="Barra-filtros">
            <input
                type="text"
                name="titulo"
                placeholder="Título del proyecto"
                value={formulario.titulo}
                onChange={handleChange}
                className="campo-titulo"
            />
            <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={formulario.categoria}
                onChange={handleChange}
                className="campo-categoria"
            />
            <select
                name="estado"
                value={formulario.estado}
                onChange={handleChange}
                className=""
            >
                <option value="En curso">En curso</option>
                <option value="Finalizado">Finalizado</option>
            </select>
            <button className="btn-crear" onClick={handleAgregarProyecto}>
                Agregar Proyecto
            </button>
        </div>
        <section>
            <div className="contenedor-proyectos">
                {proyectosFiltrados.map((proyecto) => (
                    <article key={proyecto.id} className="proyecto">
                        <img src={logo2} alt="Logo" />
                        <div className="informacion">
                            <h3>{proyecto.titulo}</h3>
                            <p>
                                <strong>Categoría:</strong>{" "}
                                {proyecto.categoria}
                            </p>
                            <span className={`badge ${proyecto.estado === "Finalizado" ? "done": "process"}`}>
                                {proyecto.estado}
                            </span>
                            <button className="btn-delete" onClick={() =>handleEliminar(proyecto.id)}>Eliminar</button>
                        </div>
                    </article>
                ))}

            </div>
        </section>
        </div>
    );
};
export default ListaProyectos;