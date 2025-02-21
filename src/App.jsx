import React from 'react'
import { aLink, article, dtitleArt, titleArticle, pArticle, subArticle } from './styles/element_basic'
import CodeSnippet from './components/CodeSnippet'

const codigo = `<!DOCTYPE html>
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
</html>`

const App = () => {
  return (
    <>

      <div className={article()}>
        <h2 className={titleArticle('css')}>Esto es un titulo largo y habla sobre css 3 asi que coloca el logo css
          <div className={dtitleArt()}>
            <span>{new Date().toLocaleString('es-Ve', { dateStyle: 'medium' })}</span>
            <span> · 5 minutos de lectura</span>
          </div>
        </h2>

        <div className='contArticle'>

          <p className={pArticle()}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only <a className={aLink()} href='#'>five centuries</a>, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <h3 className={subArticle()}>What is Lorem Ipsum?</h3>

          <p className={pArticle()}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" <a className={aLink()} href='#'>The Extremes of Good and Evil</a> by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>

          <CodeSnippet code={codigo} lenguage='html' />

          <p className={pArticle()}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>

        </div>
      </div>
    </>
  )
}

export default App
