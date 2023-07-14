import styled from "styled-components";

import { devices } from "@/constants";

export const LogoContainer = styled.h1`
  margin-top: 5rem;
  text-align: center;
  span {
    color: #037bc0;
  }
`;

export const NavContainer = styled.div`
  border: 0.1rem solid #e1e1e1;
  & nav.navigation {
    padding: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media ${devices.tablet} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const HeroContainer = styled.aside`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 55rem;
`;
