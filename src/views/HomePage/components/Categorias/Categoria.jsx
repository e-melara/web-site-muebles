import PropTypes from "prop-types";

function Categoria(props) {
  const { img, link } = props;
  return (
    <aside>
      <img src={img} alt={img} />
      <a className="title" href={link.href}>
        {link.text}
      </a>
    </aside>
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
