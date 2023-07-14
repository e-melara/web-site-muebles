import propTypes from "prop-types";

import Logo from "./components/Logo";
import Navegacion from "./components/Nav";

import { HeroContainer } from "./components/styles";

function Header({ landing }) {
  return (
    <header>
      <Logo />
      <Navegacion />
      {landing && <HeroContainer img={"./img/principal.jpg"} />}
    </header>
  );
}

Header.propTypes = {
  landing: propTypes.bool,
};

export default Header;
