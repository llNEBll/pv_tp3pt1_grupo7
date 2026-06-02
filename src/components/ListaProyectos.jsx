import proyectoService from "../services/proyectoService";
import { useState } from "react";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [textoBusqueda, setTextoBusqueda] = useState("");
    const proyectosFiltrados = textoBusqueda === "" ? proyectos : proyectoService.buscarProyecto(textoBusqueda);
    const handleEliminar = (id) => {
                proyectoService.eliminarProyecto(id);
                setProyectos(proyectoService.obtenerProyectos());
            };
    return (
        <div>
            <h2>Gestion de Proyectos Educativos</h2>
            <input 
                type="text"
                placeholder="Buscar proyecto..."
                value={textoBusqueda}
                onChange={(e) => setTextoBusqueda(e.target.value)}
            />
            <section>
                <div>
                    {proyectosFiltrados.map(proyecto => (
                        <article key={proyecto.id} className="card">
                            <div className="card-content">
                                <h3>{proyecto.titulo}</h3>
                                <span className={`badge ${proyecto.estado === 'Finalizado' ? 'done' : 'process'}`}>
                                    {proyecto.estado}
                                </span>
                                <p><strong>Categoria:</strong> {proyecto.categoria}</p>
                            </div>
                            <button className="btn-delate" onClick={() => handleEliminar(proyecto.id)}>Eliminar</button>
                        </article>
                    ))
                    }
                </div>
            </section>

        </div>
    )
}
export default ListaProyectos;