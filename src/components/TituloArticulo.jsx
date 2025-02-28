import { dtitleArt, titleArticle } from '../styles/element_basic'

const TituloArticulo = ({ titulo, date, lectura, tecnologia }) => {
  return (
    <h2 className={titleArticle(tecnologia)}>{titulo}
      <div className={dtitleArt()}>
        <span>{new Date().toLocaleString('es-Ve', { dateStyle: 'medium' })}</span>
        <span> · {lectura} minutos de lectura</span>
      </div>
    </h2>
  )
}

export default TituloArticulo
