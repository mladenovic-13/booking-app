import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  state: any;
}

const ListItem = ({ state }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels/id`, { state });
  };

  return (
    <Container>
      <HotelDetails>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/233667740.webp?k=2e93580f8fd1ed4952871960e6731ee95be884dd70d18179e912ec404397c302&o=&s=1"
          alt=""
          className="img"
        />
        <div className="hotelDetails">
          <div className="heading">
            <h1 className="title">Lux Suite S5 Milmari Resort</h1>
            <Stars>Stars</Stars>
          </div>
          <div className="location">
            <span>Kopaonik</span>
            <span>Show on map</span>
            <span>4km from centre</span>
          </div>
          <div className="details">
            <p className="detailsTitle">Apartment with Terrace</p>
            <p className="detailsDesc">
              Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1
              kitchen • 30m²
            </p>
            <p className="detailsBeds">2 beds (1 sofa bed, 1 large double)</p>
          </div>
        </div>
      </HotelDetails>
      <PriceAndReviews>
        <div className="rating">
          <div className="reviews">
            <h2>Fabulous</h2>
            <p>1,307 reviews</p>
          </div>
          <p className="degree">8.6</p>
        </div>
        <p className="locationDebree">Location 9.4</p>
        <p className="options">3 nights, 2 adults</p>
        <p className="price">$ 340</p>
        <p className="taxes">Includes taxes and charges</p>
        <button className="btn" onClick={handleClick}>
          See availability <span>&gt;</span>
        </button>
      </PriceAndReviews>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 3px;
  height: 200px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;
const HotelDetails = styled.div`
  display: flex;
  gap: 10px;
  width: 70%;
  .img {
    width: 200px;
    height: 200px;
  }
  .heading {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .title {
    margin: 0;
    font-size: 22px;
  }
  .location {
    display: flex;
    justify-content: space-between;
    width: 80%;
    font-size: 14px;
    color: #484747;
    margin-top: 2px;
    margin-bottom: 30px;
  }
  .hotelDetails {
    display: flex;
    flex-direction: column;
  }
  .detailsTitle {
    font-weight: 600;
  }
  .details {
    border-left: 2px solid gray;
    font-size: 14px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .details * {
    margin: 0;
  }
  .detailsBeds {
    margin: 0;
  }
`;
const PriceAndReviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  * {
    margin: 0;
  }
  .rating {
    display: flex;
    gap: 10px;
    margin-bottom: 3px;
  }
  .reviews > h2 {
    font-size: 18px;
    font-weight: 500;
  }
  .reviews > p {
    font-size: 14px;
  }
  .locationDebree {
    color: ${(p: any) => p.theme.color["primary-light"]};
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .options,
  .taxes {
    font-size: 14px;
    color: #646464;
  }
  .degree {
    display: flex;
    align-items: center;
    padding: 0px 7px;
    border-radius: 10px 0 10px 0;
    color: white;
    font-size: 16px;
    font-weight: 600;
    background-color: ${(p: any) => p.theme.color["primary-dark"]};
  }
  .price {
    font-size: 32px;
    font-weight: 400;
  }
  .btn {
    background-color: ${(p: any) => p.theme.color["primary-btn"]};
    font-size: 16px;
    color: white;
    border: none;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    margin-top: 8px;
    transition: 0.5s ease-in-out;
  }
  .btn > span {
    margin-left: 10px;
  }
  .btn:hover {
    background-color: ${(p: any) => p.theme.color["primary-dark"]};
    transform: scale(1.05);
    border-radius: 3px;
  }
`;
const Stars = styled.span``;

export default ListItem;
