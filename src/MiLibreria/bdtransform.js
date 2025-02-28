const bdtransform = texto => {
  // Si no nos envian texto hace que termine la funcion
  if (!texto) return { titulo: '' }

  // almacenamos lo que nos envian por parametros sepando la primera linea
  const arregloEspacios = texto.split('\n')

  // separamos por espacios nuestro titulo
  const tituloClas = arregloEspacios[0].split(' ')

  const bd = {}

  // nos muestra lo que debemos de eliminar de nuestro titulo
  let deleteTitulo = 0

  // almacenamos el titulo completo solo de eliminar los codigos de las clasificacion
  bd.titulo = tituloClas

  // metodos
  const buscarClasificaciones = (texto, tipo) => {
    const temporal = texto.findIndex(element => {
      element = element.split(':')
      return element[0] === tipo // retornamos el index de el la ubicacion del codigo
    })

    if (temporal === -1) return undefined // si no existe el codigo retornamos undefined

    deleteTitulo++// subimos el contador

    return texto[temporal].split(':')[1] // retornamos el contenido del codigo de clasificacion
  } // busca clasificaciones en string y devuleve el valor de la clasificacion

  const eliminarCodigosTitulo = num => {
    bd.titulo.length = bd.titulo.length - num
  } // elimina los codigos de clasificaciones del titulo

  // añadiendo clasificaciones existentes
  bd.clasificacion = {}

  bd.clasificacion.fecha = new Date().toLocaleString('es-Ve', { dateStyle: 'medium' })

  bd.clasificacion.tiempoLectura = buscarClasificaciones(tituloClas, 'lecturabd')

  bd.clasificacion.autor = buscarClasificaciones(tituloClas, 'autorbd')

  bd.clasificacion.area = buscarClasificaciones(tituloClas, 'areabd')

  bd.clasificacion.subArea = buscarClasificaciones(tituloClas, 'subAreabd')

  bd.clasificacion.tecnologia = buscarClasificaciones(tituloClas, 'tecnologiabd')

  bd.clasificacion.nivel = buscarClasificaciones(tituloClas, 'nivelbd')

  bd.clasificacion.tipo = buscarClasificaciones(tituloClas, 'tipobd')
  console.log(deleteTitulo)
  eliminarCodigosTitulo(deleteTitulo)
  bd.titulo = bd.titulo.join(' ')
  console.log(bd)

  return bd
}

export {
  bdtransform
}
