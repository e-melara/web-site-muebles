import { nombreSitio } from "@/constants";

import { LogoContainer } from "./styles";

function Logo() {
  const [nombre, ...contenedorSpan] = nombreSitio.split(" ");
  return (
    <LogoContainer>
      {nombre} <span>{contenedorSpan}</span>
    </LogoContainer>
  );
}

export default Logo;
