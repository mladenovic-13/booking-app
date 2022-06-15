import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCab,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import HederSearch from "./HederSearch";
import PrimaryButton from "./buttons/PrimaryButton";

const Header: React.FC = () => {
  return (
    <H>
      <Container>
        <HeaderList>
          <ListItem active>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCab} />
            <span>Airport taxis</span>
          </ListItem>
        </HeaderList>
        <CTA>
          <h1>A lifetime of dicounts? It's Genius.</h1>
          <p>
            Get rewarder for your travels - unlock instant savings of 10% or
            more with a free account.
          </p>
          <PrimaryButton>Sing In / Register</PrimaryButton>
        </CTA>
        <HederSearch />
      </Container>
    </H>
  );
};

const H = styled.div`
  position: relative;
  background-color: ${(props: any) => props.theme.color["primary-dark"]};
  color: white;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
  ${(props: any) => (props.active ? "border: 1px solid white" : "border:none")};
`;
const CTA = styled.div`
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 22px;
    margin: 30px 0px;
  }
`;
export default Header;
