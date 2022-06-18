import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  images: string[];
  index: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ImageModal: React.FC<Props> = ({ images, index, setOpen, setIndex }) => {
  const handleArrow = (side: "left" | "right") => {
    if (side === "left")
      index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
    if (side === "right")
      index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <Wrapper>
      <Container>
        <FontAwesomeIcon
          onClick={() => handleArrow("left")}
          className="arrow"
          icon={faCircleArrowLeft}
        />
        <FontAwesomeIcon
          onClick={() => setOpen(false)}
          className="exitIcon"
          icon={faCircleXmark}
        />
        <ImageWrapper>
          <img className="img" src={images[index]} alt="" />
        </ImageWrapper>
        <FontAwesomeIcon
          className="arrow"
          onClick={() => handleArrow("right")}
          icon={faCircleArrowRight}
        />
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

  .arrow {
    width: 50px;
    height: 50px;
    margin: 20px;
    color: ${(p: any) => p.theme.color["primary-lighter"]};
    cursor: pointer;
  }
  .exitIcon {
    width: 50px;
    height: 50px;
    margin: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    color: ${(p: any) => p.theme.color["primary-lighter"]};
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export default ImageModal;
