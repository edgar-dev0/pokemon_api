import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import pokeTipografia from "../assets/img/pokedex.png"
import pokeLogo from "../assets/img/adaptive-icon.png"


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  //console.log(typeSelected)
  
  const trainer = useSelector(store => store.trainer)
  /* useSelector nos permite acceder al valor del estado */
  //console.log(trainer)

  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit20'
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

  
  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  
  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
  //console.log(pokemons)

  return (
    <div>
      <header className="container__header">
        <div className="header__images">
          <img src={pokeTipografia} alt="tipografia" />
          <img className="header__images__logo" src={pokeLogo} alt="logotipo" />
        </div>
        <div className="header__title">
          <p>¡Hi <span>{trainer}</span>!, here you found your favorite Pokemon.</p> 
        </div>
        <div className="container__form">
          <form className="header__form" onSubmit={handleSearch}>
            <input ref={inputSearch} placeholder="Search pokemon" type="text" />
            <button className="header__form__button" title="Search pokemon"></button>
          </form>
          <SelectType 
            setTypeSelected={setTypeSelected}
          />
        </div>
      </header>
      <div className="cards__container">
        {
          pokeFiltered?.map((poke) => (
            <PokeCard
                key={poke.url}
                url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage