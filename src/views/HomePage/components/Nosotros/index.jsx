import { SobreNosotrosContainer } from "../styles";

function Nosotros() {
  return (
    <SobreNosotrosContainer img="./public/img/nosotros.jpg">
      <div className="nosotros-grid contenedor">
        <div className="texto">
          <h2>Sobre Nosotros</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatum fugiat numquam sunt error, odit nostrum sed adipisci
            minima ipsum labore asperiores. Assumenda delectus necessitatibus
            iusto, dolore vel quod blanditiis!
          </p>
        </div>
      </div>
    </SobreNosotrosContainer>
  );
}

export default Nosotros;
