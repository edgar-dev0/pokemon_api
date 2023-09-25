import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from "react-router-dom"

const PokeCard = ({ url }) => {

  const [pokemon, getPokemon] = useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemon()
  }, [])

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  //console.log(pokemon)

  return (
    <div className='card'>
      <article onClick={handleNavigate}>
        <header>
          {/* Otra forma de acceder a propiedades de objetos en react es usando [name_property]
          esto es usado cuando el nombre de la propiedad esta seárada por '-' ya que no es valido */}
          <img className="card__image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='card__info'>
          <h3>{pokemon?.name}</h3>
          <ul>
            {
              pokemon?.types.map(typeInfo => (
                <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
          <hr />
          <ul>
            {
              pokemon?.stats.map(statInfo => (
                <li key={statInfo.stat.url}>
                  <span>{statInfo.stat.name}</span>
                  <span>{statInfo.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </section>
      </article>
    </div>
  )
}

export default PokeCard
