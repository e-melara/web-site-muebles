import Logo from "./components/Logo";
import Navegacion from "./components/Nav";

import { HeroContainer } from "./components/styles";

function Header() {
  return (
    <header>
      <Logo />
      <Navegacion />
      <HeroContainer img={"./img/principal.jpg"} />
    </header>
  );
}

export default Header;
