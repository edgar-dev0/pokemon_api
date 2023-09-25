import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"

const PokedexPage = () => {

  const trainer = useSelector(store => store.triner)
  /* useSelector nos permite acceder al valor del estado */
  console.log(trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit20'
  //console.log(url)
  const [ pokemons, getPokemons ] = useFetch(url)

  useEffect(() => {
    getPokemons()
  }, [])

  console.log(pokemons)

  return (
    <div>
      <p>Hi {trainer}</p>
      <div>
        {
          pokemons?.results.map((poke) => (
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