import './App.css'
import { Descripcion } from './component/descripcion/descripcionComponent'
import { Imagen } from './component/imagen/ImagenComponente'
import { Nombre } from './component/nombre/nombreComponente'


function App() {

  return (
    
    <div className='card'>
      <Imagen />
      <div className='cuadro'><Nombre name='Alive'/></div>
      
      <Descripcion descripcion='Rick Sanchez'/>
      <Descripcion descripcion='Human'/>
    </div>
  )
}

export default App