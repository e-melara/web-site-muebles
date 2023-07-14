import propType from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, landing }) {
  return (
    <>
      <Header landing={landing} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  landing: propType.bool,
  children: propType.node.isRequired,
};

export default Layout;
