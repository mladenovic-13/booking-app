import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import MapWrapper from "./MapWrapper";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MapModal: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Wrapper>
      <Container>
        <FontAwesomeIcon
          onClick={() => setOpen(false)}
          className="exitIcon"
          icon={faCircleXmark}
        />
        <Map>
          <MapWrapper size="lg" />
        </Map>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #00000083;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;

  .exitIcon {
    width: 50px;
    height: 50px;
    margin: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
    color: ${(p: any) => p.theme.color["primary-lighter"]};
    cursor: pointer;
  }
`;
const Map = styled.div`
  width: 70vw;
`;
export default MapModal;
