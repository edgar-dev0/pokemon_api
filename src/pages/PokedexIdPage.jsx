import { useParams } from "react-router-dom"
import useFetch from '../hooks/useFetch'
import { useEffect } from "react"

const PokedexIdPage = () => {

const { id } = useParams()

const url = `https://pokeapi.co/api/v2/pokemon/${id}`
const [pokemonInfo, getPokemonInfo] = useFetch(url)

useEffect (() => {
  getPokemonInfo()
}, [id])

console.log(pokemonInfo)

  return (
    <div>
      <h1>{id}</h1>
      <img src={pokemonInfo?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemonInfo?.name}</h2>
    </div>
  )
}

export default PokedexIdPage
