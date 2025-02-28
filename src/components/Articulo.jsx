import { bdtransform } from '../MiLibreria/bdtransform'
import { article } from '../styles/element_basic'
import TituloArticulo from './TituloArticulo'

const Articulo = ({ texto }) => {
  const bd = bdtransform(texto)
  return (
    <div className={article()}>
      {bd.titulo && <TituloArticulo titulo={bd.titulo} lectura={bd.clasificacion.tiempoLectura} />}
    </div>
  )
}

export default Articulo
