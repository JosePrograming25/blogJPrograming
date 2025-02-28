import React from 'react'
import Articulo from './components/Articulo'
import EjemploBlog from './Ejemploblog'

const App = () => {
  const [contenido, setcontenido] = React.useState('')

  return (
    <>
      <EjemploBlog />
      {/*       <Articulo texto={contenido} />
      <div className='comment-box'>
        <textarea
          onChange={e => {
            setcontenido(e.target.value)
          }} placeholder='Escribe lo que deseas que tenga tu pagina aqui..' rows='4'
        />
        <button>Enviar</button>
      </div> */}
    </>
  )
}

export default App
