import React, { useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MiniMap from "./MiniMap";
import styled from "styled-components";
import MapModal from "./MapModal";

type Props = {
  withButton?: boolean;
  size: "s" | "lg";
};

const MapWrapper: React.FC<Props> = ({ withButton, size }) => {
  const [open, setOpen] = useState<boolean>(false);

  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <h1>Loading</h1>;
      case Status.FAILURE:
        return <h1>Failure</h1>;
      case Status.SUCCESS:
        return <MiniMap size={size} />;
    }
  };
  return (
    <div className="map">
      <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY!} render={render} />
      {withButton && (
        <div onClick={() => setOpen(true)}>
          <StyledButton>Show On Map</StyledButton>
        </div>
      )}
      {open && <MapModal open={open} setOpen={setOpen} />}
    </div>
  );
};

const StyledButton = styled.div`
  padding: 6px;
  font-size: 15px;
  color: ${(props: any) => props.theme.color["primary-dark"]};
  background-color: ${(props: any) => props.theme.color["yellow"]};
  font-weight: 400;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.05);
  }
  text-align: center;
`;

export default MapWrapper;
