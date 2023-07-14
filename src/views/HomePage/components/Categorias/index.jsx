import Categoria from "./Categoria";
import { CategoriasContainer } from "../styles";
import { categorias } from "@/data/metadata";

function Categorias() {
  return (
    <CategoriasContainer className="contenedor">
      <h2 className="text-center">Categorías de Productos</h2>
      <div className="listado">
        {categorias.map((categoria, index) => (
          <Categoria key={index} {...categoria} />
        ))}
      </div>
    </CategoriasContainer>
  );
}

export default Categorias;
