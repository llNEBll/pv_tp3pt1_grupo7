const proyectoService = (() => {
  let proyectos = [
        {id: 1, titulo:"Implementación de Redes en Escuelas Rurales", categoria:"redes", estado:"En curso"},
        {id: 2, titulo:"Diseño de Interfaces para Plataformas", categoria:"Diseño", estado:"En curso"},
        {id: 3, titulo:"Sistema de Gestión de Trabajos Prácticos", categoria:"Programa", estado:"En curso"},
        {id: 4, titulo:"Configuración de Usuarios y Privilegios", categoria:"Base de datos", estado:"En curso"},
        {id: 5, titulo:"Tipos de Redes", categoria:"redes", estado:"En curso"},
    ];
    const obtenerProyectos = () => [...proyectos];
    const agregarProyecto = (proyecto) => {
        proyectos.push(proyecto);};
    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };
    const buscarProyecto = (texto) => {
        return proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(texto.toLowerCase()));
    };
    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();
export default proyectoService;