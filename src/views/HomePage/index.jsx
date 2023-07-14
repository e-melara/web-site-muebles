import Layout from "@/components/Layout";

import Categorias from "./components/Categorias";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";

const HomePage = () => {
  return (
    <Layout landing>
      <Categorias />
      <Nosotros />
      <Productos />
    </Layout>
  );
};

export default HomePage;
