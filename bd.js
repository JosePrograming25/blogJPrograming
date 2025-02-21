const clasePrincipal = (titulo, clasificacion, contTitulo, subContenido) => {
  return {
    titulo, // titulo de el articulo
    clasificacion, // un objeto que posee informacion sobre la clasificion
    contTitulo,
    subContenido
  }
}

const claseClasificacion = (area, subArea, tecnologia, nivel, tipo, autor, fecha, tiempoLectura) => {
  return {
    area, // area de clasificacion ejm: programacion, diseño, noticia, tutorial, solucionProblemas etc
    subArea, // subArea de clasificacion ejm: frontend, backend, fullstack, ux, ui, etc
    tecnologia, // tecnologia de clasificacion ejm: javascript, python, css, html, etc
    nivel, // nivel de clasificacion ejm: basico, intermedio, avanzado
    tipo, // tipo de clasificacion ejm: video, articulo, podcast, etc
    autor, // autor de el articulo
    fecha, // fecha de creacion de el articulo
    tiempoLectura // tiempo de lectura de el articulo
  }
}

const newElement = (etiqueta, contenido) => {
  return {
    etiqueta,
    contenido
  }
}

const claseContTitulo = (...newElement) => {
  return [...newElement]
}

const claseSubContenido = (...newElement) => {
  return [...newElement]
}
