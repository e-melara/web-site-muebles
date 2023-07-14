import { NavContainer } from "./styles";
function Navegacion() {
  return (
    <NavContainer>
      <nav className="contenedor navigation">
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <a href="#">Tienda</a>
        <a href="#">Blog</a>
        <a href="#">Galeria</a>
        <a href="#">Contacto</a>
      </nav>
    </NavContainer>
  );
}

export default Navegacion;
