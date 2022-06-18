import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type Props = {
  size: "s" | "lg";
};

const MiniMap: React.FC<Props> = ({ size }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  let myLatLng = new google.maps.LatLng(44.79315, 20.50475);
  var mapOptions = {
    zoom: 13,
    center: myLatLng,
    mapTypeId: "roadmap",
  };
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    }
  }, [ref, map]);

  return <Container size={size} ref={ref} />;
};

const Container = styled.div`
  width: 100%;
  height: ${(p: any) => (p.size === "s" ? "200px" : "600px")};
  border-radius: 5px;
`;

export default MiniMap;
