import Producto from "./Producto";

import { ProductosContainer } from "../../styles";
import { productos } from "@/data/metadata";

function Listado() {
  return (
    <ProductosContainer>
      {productos.map((producto, index) => (
        <Producto key={index} producto={producto} />
      ))}
    </ProductosContainer>
  );
}

export default Listado;
