import styled from "styled-components";

export const CategoriasContainer = styled.section`
  padding: 5rem 0;
  .listado {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    a.title {
      padding: 2rem;
      font-size: 2rem;
      display: block;
      text-align: center;
      &:hover {
        color: #fff;
        border-bottom-right-radius: 1rem;
        background-color: #037bc0;
      }
    }
  }
`;
export const SobreNosotrosContainer = styled.section`
  padding: 10rem 0;
  background-position: left center;
  background-size: 100% 160rem;
  background-image: linear-gradient(
      to right,
      transparent 50%,
      #037bc0 50%,
      #037bc0 100%
    ),
    url(${(props) => props.img});
  .nosotros-grid {
    display: grid;
    gap: 10rem;
    grid-template-rows: unset;
    grid-template-columns: repeat(2, 1fr);
    .texto {
      color: white;
      padding: 5rem;
      grid-column: 2/3;
    }
  }
`;

export const ProductosContainer = styled.div``;
