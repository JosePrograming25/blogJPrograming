const clasePrincipal = (titulo, clasificacion, contTitulo, subContenido) => {
  return {
    titulo, // titulo de el articulo
    clasificacion, // un objeto que posee informacion sobre la clasificion
    contTitulo,
    subContenido
  }
}

const claseClasificacion = (area, subArea, tecnologia, nivel, tipo, autor, tiempoLectura) => {
  return {
    area, // area de clasificacion ejm: programacion, diseño, noticia, tutorial, solucionProblemas etc
    subArea, // subArea de clasificacion ejm: frontend, backend, fullstack, ux, ui, etc
    tecnologia, // tecnologia de clasificacion ejm: javascript, python, css, html, etc
    nivel, // nivel de clasificacion ejm: basico, intermedio, avanzado
    tipo, // tipo de clasificacion ejm: video, articulo, podcast, etc
    autor, // autor de el articulo
    fecha: new Date().toLocaleString('es-Ve', { dateStyle: 'medium' }), // fecha de creacion de el articulo
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

const ada = clasePrincipal(
  'Esto es un titulo largo y habla sobre css 3 asi que coloca el logo css',
  claseClasificacion(
    'programacion',
    'frontend',
    'css',
    'intermedio',
    'articulo',
    'José García',
    '5 minutos de lectura'
  ),
  [
    newElement('img', { src: 'ejemplo2.com/jpg', alt: 'ejemplo1' }),
    newElement('p', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only "),
    newElement('a', { href: '#', contenido: 'five centuries' }),
    newElement('p', 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
  ],
  [
    clasePrincipal(
      'What is Lorem Ipsum?',
      claseClasificacion(
        'programacion',
        'frontend',
        'css',
        'intermedio',
        'articulo',
        'José García',
        '5 minutos de lectura'
      ),
      [
        newElement('p', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" '),
        newElement('a', { href: '#', contenido: 'The Extremes of Good and Evil' }),
        newElement('p', 'by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'),
        newElement('img', { src: 'ejemplo2.com/jpg', alt: 'ejemplo2' }),
        newElement('p', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'),
        newElement('CodeSnippet', {
          code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Name project</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>`,
          lenguage: 'html'
        }),
        newElement('p', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.')
      ]
    )
  ]

)

console.log(ada)
