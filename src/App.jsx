import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div>
      {/* Routes es el componente que nos permite crear rutas */}
      <Routes>
        {/* Route Es elelemento que permite crear una ruta */}
        <Route path='/' element={ <HomePage/> }/>
        {/* Para proteger rutas */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={ <PokedexPage/> }/>
          <Route path='/pokedex/:id' element={ <PokedexIdPage/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
