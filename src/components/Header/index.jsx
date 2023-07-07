import Logo from "./components/Logo";
import Navegacion from "./components/Nav";

import heroImg from "../../assets/img/principal.jpg";
import { HeroContainer } from "./components/styles";

function Header() {
  return (
    <header>
      <Logo />
      <Navegacion />
      <HeroContainer img={heroImg} />
    </header>
  );
}

export default Header;
