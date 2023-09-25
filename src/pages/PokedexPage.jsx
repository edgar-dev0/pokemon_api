import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  console.log(typeSelected)
  
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
      <p>Hi {trainer}</p>
      <form onSubmit={handleSearch}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <SelectType 
        setTypeSelected={setTypeSelected}
      />
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