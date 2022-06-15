import React from "react";
import styled from "styled-components";

const Featured = () => {
  return (
    <Container>
      <Item>
        <img
          src="https://grafenwoehr.armymwr.com/application/files/6415/2112/5568/budapest.jpg"
          alt="img"
          className="img"
        />
        <div className="titles">
          <h1>Budapest</h1>
          <h2>11,262 properties</h2>
        </div>
      </Item>
      <Item>
        <img
          src="https://media.istockphoto.com/photos/belgrade-picture-id491523503?k=20&m=491523503&s=612x612&w=0&h=IVs32XY41W7rbCz45Z93jQ2fbftICXWJ8zvVmmm0hLY="
          alt="img"
          className="img"
        />
        <div className="titles">
          <h1>Belgrade</h1>
          <h2>17,264 properties</h2>
        </div>
      </Item>
      <Item>
        <img
          src="https://media.timeout.com/images/105303515/750/422/image.jpg"
          alt="img"
          className="img"
        />
        <div className="titles">
          <h1>Berlin</h1>
          <h2>2,164 properties</h2>
        </div>
      </Item>
      <Item>
        <img
          src="https://www.umultirank.org/export/sites/default/.galleries/generic-images/Others/Winter-Calendar/architecture-4529605_1280.jpg_1729757344.jpg"
          alt="img"
          className="img"
        />
        <div className="titles">
          <h1>Rome</h1>
          <h2>3,214 properties</h2>
        </div>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;
const Item = styled.div`
  position: relative;
  h1 {
    font-size: 30px;
    margin: 0;
  }
  h2 {
    font-size: 18px;
    margin: 0;
  }
  .titles {
    position: absolute;
    top: 10px;
    left: 20px;
    color: white;
    text-shadow: 2px 2px 8px black;
  }
  .img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export default Featured;
