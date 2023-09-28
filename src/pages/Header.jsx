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
        </div>
        <div className="container__form">
        </div>
      </header>
    </div>
  )
}

export default Header
