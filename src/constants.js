const nombreSitio = "Tienda Muebles";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
  laptopLarge: `(min-width: ${sizes.laptopL})`,
  desktopLarge: `(min-width: ${sizes.desktop})`,
  mobileSmall: `(min-width: ${sizes.mobileS})`,
  mobileMedium: `(min-width: ${sizes.mobileM})`,
  mobileLarge: `(min-width: ${sizes.mobileL})`,
};

export { nombreSitio, devices };
