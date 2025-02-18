import React from "react";
import { aLink } from "./styles/element_basic";

const App = () => {
    return (
        <>

        <div className="article">
            <h2>Titulo de mi articulo</h2>
            <span className="dTitleArt"></span>
            <div className="contArticle"></div>
        </div>
        <h1>hello World!</h1>
        <a className={aLink()} href="#">hola</a>
        </>
    )
}

export default App