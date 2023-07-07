import Categoria from "./Categoria";
import { CategoriasContainer } from "../styles";
import { categorias } from "../../../../data/metadata";

function Categorias() {
  return (
    <CategoriasContainer className="contenedor">
      <h2>Categorías de Productos</h2>
      {categorias.map((categoria, index) => (
        <Categoria key={index} {...categoria} />
      ))}
    </CategoriasContainer>
  );
}

export default Categorias;
