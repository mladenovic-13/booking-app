import React from "react";
import styled from "styled-components";

const FeaturedHotels = () => {
  return (
    <Hotels>
      <h1 className="title">Homes guests love</h1>
      <Container>
        <Item>
          <img
            src="https://myapartmentbelgrade.com/upload/apartmani-beograd-2-jpg-1438844453.jpg"
            alt=""
          />
          <h2 className="name">Apartment Mladenovich</h2>
          <p className="city">Belgrade</p>
          <p className="address">Resavska 30b/18</p>
          <div className="rating">
            <span className="ratingNum">9.4</span>
            <span className="ratingTxt">Wonderfull</span>
            <span className="reviews">495 reviews</span>
          </div>
        </Item>
        <Item>
          <img
            src="https://autori.rs/wp-content/uploads/2020/01/01.jpg"
            alt=""
          />
          <h2 className="name">Apartment Sun</h2>
          <p className="city">Belgrade</p>
          <p className="address">Resavska 30b/18</p>
          <div className="rating">
            <span className="ratingNum">9.4</span>
            <span className="ratingTxt">Wonderfull</span>
            <span className="reviews">495 reviews</span>
          </div>
        </Item>
        <Item>
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/267316381.jpg?k=2757641fe5f04cd73dfeafa250b72b7ebaebef789d228ce67f97acb4f0505b2e&o="
            alt=""
          />
          <h2 className="name">Happy Hotel</h2>
          <p className="city">Belgrade</p>
          <p className="address">Resavska 30b/18</p>
          <div className="rating">
            <span className="ratingNum">9.4</span>
            <span className="ratingTxt">Wonderfull</span>
            <span className="reviews">495 reviews</span>
          </div>
        </Item>

        <Item>
          <img
            src="https://image.architonic.com/prj2-3/20116834/rua-141-apartment-in-sao-paulo-architonic-3629-01-arcit18.jpg"
            alt=""
          />
          <h2 className="name">Metropol Palace</h2>
          <p className="city">Belgrade</p>
          <p className="address">Resavska 30b/18</p>
          <div className="rating">
            <span className="ratingNum">9.4</span>
            <span className="ratingTxt">Wonderfull</span>
            <span className="reviews">495 reviews</span>
          </div>
        </Item>
      </Container>
    </Hotels>
  );
};

const Hotels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 22px;
    width: 1024px;
    margin: 12px 0px;
    font-weight: 600;
  }
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  justify-content: space-between;
`;
const Item = styled.div`
  width: 24.5%;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

  .ratingNum {
    background-color: ${(p: any) => p.theme.color["primary-dark"]};
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
    border-radius: 6px 0 6px 0;
  }
  .ratingTxt {
    font-weight: 500;
    font-size: 17px;
    margin: 0 5px;
  }
  .city {
    font-size: 14px;
    margin: 3px 0;
    color: ${(p: any) => p.theme.color["orange"]};
  }
  .address {
    margin: 8px 0 20px 0;
    font-size: 16px;
  }
  .reviews {
    color: ${(p: any) => p.theme.color["orange"]};
    font-size: 14px;
    margin-left: 15px;
  }
`;

export default FeaturedHotels;
