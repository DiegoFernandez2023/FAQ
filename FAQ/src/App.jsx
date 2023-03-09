import { useState } from 'react'
import {Categorias,Contacto, Footer, Header, Preguntas, SearchArea, Tiendas} from './components'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SearchArea/>
      <Preguntas/>
      <Categorias/>
      <Tiendas/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
