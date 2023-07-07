import propTypes from "prop-types";

const FooterNav = ({ text, links }) => {
  return (
    <div>
      <h3>{text}</h3>
      <nav className="menu">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

FooterNav.propTypes = {
  text: propTypes.string.isRequired,
  links: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterNav;
