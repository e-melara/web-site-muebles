import PropTypes from "prop-types";

import { CategoriaContainer } from "../styles";

function Categoria(props) {
  const { img, link } = props;
  return (
    <CategoriaContainer>
      <img src={img} alt={img} />
      <a href={link.href}>{link.text}</a>
    </CategoriaContainer>
  );
}

Categoria.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categoria;
