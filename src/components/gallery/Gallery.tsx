import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import ImageModal from "./ImageModal";

type Props = {
  images: string[];
};

const Gallery: React.FC<Props> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const openModal = (index: number) => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <Container>
      {open && (
        <ImageModal
          images={images}
          index={index}
          setIndex={setIndex}
          setOpen={setOpen}
        />
      )}

      {images.map((img, index) => {
        if (index === 0)
          return (
            <Item big key={index}>
              <img
                onClick={() => openModal(index)}
                className="img"
                src={img}
                alt=""
              />
            </Item>
          );

        return (
          <Item key={index}>
            <img
              onClick={() => openModal(index)}
              className="img"
              src={img}
              alt=""
            />
          </Item>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  grid-template-rows: repeat(3, 150px);
  gap: 10px;
`;
const Item = styled.div`
  -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  ${(p: any) =>
    p.big
      ? css`
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 3;
        `
      : ""}

  overflow: hidden;
  .img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    transition: 0.5s ease-in;
    border-radius: 2px;
  }
  .img:hover {
    transform: scale(1.1);
  }
`;

export default Gallery;
