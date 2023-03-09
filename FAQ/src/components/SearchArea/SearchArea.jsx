import {useState} from 'react'
import './SearchArea.scss'
export function SearchArea() {

const block = { display: 'block' }
const none= { display: 'none' }
const [displayResults, setDisplayResults] = useState(false)
const showResultBox=()=>{
  setDisplayResults(prevState => !prevState)
}
  return (
    <div className='search-area'>
      <h1>¿Cómo podemos ayudarte?</h1>
      <input type="text" placeholder='Busca preguntas frecuentes o palabras clave' 
      onFocus={showResultBox} onBlur={showResultBox}/>
      <div className="results-box" style={displayResults? block :none }></div>
    </div>
  )
}
