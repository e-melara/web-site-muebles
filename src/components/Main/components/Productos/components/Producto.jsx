import propType from "prop-types";

const Producto = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.img} alt="Imagen" />
      <div className="texto">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p>{producto.precio}</p>
        <a className="btn" href={producto.href}>
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

Producto.propTypes = {
  producto: propType.shape({
    img: propType.string.isRequired,
    nombre: propType.string.isRequired,
    descripcion: propType.string.isRequired,
    precio: propType.number.isRequired,
    href: propType.string.isRequired,
  }).isRequired,
};

export default Producto;
