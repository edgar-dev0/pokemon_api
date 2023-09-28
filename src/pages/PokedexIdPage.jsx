import { useParams } from "react-router-dom"
import useFetch from '../hooks/useFetch'
import { useEffect } from "react"
import pokeLogoBlack from "../assets/img/black_icon.jpg"
import Header from "./Header"

const PokedexIdPage = () => {

const { id } = useParams()

const url = `https://pokeapi.co/api/v2/pokemon/${id}`
const [pokemonInfo, getPokemonInfo] = useFetch(url)

useEffect (() => {
  getPokemonInfo()
}, [id])

console.log(pokemonInfo)

  return (
    <div className="idPage">
      <Header />
      <div className="moves__container">
        <div className="moves__container__image">
          <img src={pokemonInfo?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <section className="stats__container center">
          <h1 className="idPage__title">#{id}</h1>
          <h2 className="idPage__title">{pokemonInfo?.name}</h2>
          <hr />
          <div className="section__types">
            <p><span className="label">Weight</span><br /><span className="value">{pokemonInfo?.weight}</span></p>
            <p><span className="label">Height</span><br /><span className="value">{pokemonInfo?.height}</span></p>
          </div>
        </section>
        <div className="stats__container">
          <section className="section__types">
            <div className="section__types__container">
              <h5>Type</h5>
              <ul className="stats__container__list">
                {
                  pokemonInfo?.types.map(e => (
                    <li className="list__item__type">{e.type.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className="section__types__container">
              <h5>Abilities</h5>
              <ul className="stats__container__list">
                {
                  pokemonInfo?.abilities.map(e => (
                    <li className="list__item__ability">{e.ability.name}</li>
                  ))
                }
              </ul>
            </div>
          </section>
          <section className="section__stats">
          <div className="title_container">
            <h4>Stats</h4>
              <hr/>
            <span><img className="moves__container__img" src={pokeLogoBlack} alt="" /></span>
          </div>
            <ul className="stats__container__list">
              {
                pokemonInfo?.stats.map(e => (
                  <li><span className="list__item__stat__label">{e.stat.name}: </span><span className="list__item__stat__value">{e.base_stat}/150</span></li>
                ))
              }
            </ul>
          </section>
        </div>
      </div>
      <div className="moves__container">
        <div className="title_container">
          <h4>Movements</h4>
            <hr/>
          <span><img className="moves__container__img" src={pokeLogoBlack} alt="" /></span>
        </div>
        <ul className="moves__container__list">
          {
            pokemonInfo?.moves.map(e => (
              <li className="moves__container__list__item">{e.move.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default PokedexIdPage
