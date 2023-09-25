import { useRef } from "react" 
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const inputTrainer = useRef()
  /* useRef nos sirve para capturar el elemento */

  const dispatch = useDispatch()

  const navigate = useNavigate()
  /* useNavigate nos devuelve una funcion que permite navegar entre rutas */

  const handleTrainer = (e) => {
    e.preventDefault()
    /* se envia como argumento el valor que es ingresado a traves del elemento input para 
    cacharlo desde el slice setTrainerSlice*/
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    /* current es la propiedad que refiere al mismo elemento en contexto */
    /* dispatch despacha la accion */
    navigate('/pokedex')
  }

  return (
    <div className="homepage">
      <div className="homepage__title">
      </div>
      <div className="homepage__container">
        <h2>Hi Trainer!</h2>
        <p className="homepage__text">To start, please enter you trainer name</p>
        <form className="homepage__form" onSubmit={handleTrainer}>
          <input className="homepage__form__input" ref={inputTrainer} type="text" />
          <button className="homepage__form__button">Start</button>
        </form>
      </div>
    </div>
  )
}

export default HomePage
