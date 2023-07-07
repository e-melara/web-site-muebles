import styled from "styled-components";

export const LogoContainer = styled.h1`
  font-size: 2.5rem;
  & span {
    color: red;
  }
`;

export const NavContainer = styled.div`
  display: flex;
`;

export const HeroContainer = styled.aside`
  background-color: red;
  background-image: url(${(props) => props.img});
  min-height: 150px;
`;
