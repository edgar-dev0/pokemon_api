import pokeTipografia from "../assets/img/pokedex.png"
import pokeLogo from "../assets/img/adaptive-icon.png"

const Header = () => {
  return (
    <div>
      <header className="container__header">
        <div className="header__images">
          <img src={pokeTipografia} alt="tipografia" />
          <img className="header__images__logo" src={pokeLogo} alt="logotipo" />
        </div>
        <div className="header__title">
          {/* <p>¡Hi <span>{trainer}</span>!, here you found your favorite Pokemon.</p>  */}
        </div>
        <div className="container__form">
          {/* <form className="header__form" onSubmit={handleSearch}>
            <input ref={inputSearch} placeholder="Search pokemon" type="text" />
            <button className="header__form__button" title="Search pokemon"></button>
          </form> */}
         {/*  <SelectType 
            setTypeSelected={setTypeSelected}
          /> */}
        </div>
      </header>
    </div>
  )
}

export default Header
