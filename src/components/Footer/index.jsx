import FooterNav from "./NavFooter";
import { FooterContainer } from "./styles";
import { footerLinks } from "@/data/metadata";

function Footer() {
  return (
    <FooterContainer>
      <div className="grid contenedor">
        {footerLinks.map((nav, index) => (
          <FooterNav key={index} {...nav} />
        ))}
      </div>
      <p className="copyright">Todos los derechos reversados</p>
    </FooterContainer>
  );
}

export default Footer;
