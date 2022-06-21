import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SideSearch from "../../components/funtional/SideSearch";
import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/gallery/Gallery";
import { galleryImages } from "../../util/data";
import MapWrapper from "../../components/google-map/MapWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faStarHalfStroke,
  faVanShuttle,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const location = useLocation();

  return (
    <Layout page="list">
      <Container>
        <Wrapper>
          <SearchWrapper>
            <SideSearch state={location.state} />
            <MapWrapper withButton size="s" />
          </SearchWrapper>
          <ContentWrapper>
            <DetailsWrapper>
              <Details>
                <h1>Terrace Apartments at City Park</h1>
                <div className="address">
                  <FontAwesomeIcon
                    className="locationIcon"
                    icon={faLocationDot}
                  />
                  1143 Budapest, Stefánia út 32 (III/2), Hungary{" "}
                </div>
                <div className="wifi address">
                  <FontAwesomeIcon className="locationIcon" icon={faWifi} />
                  Free Wi-FI
                </div>
                <div className="bus address">
                  <FontAwesomeIcon
                    className="locationIcon"
                    icon={faVanShuttle}
                  />
                  Free Buss to/from Airport
                </div>
              </Details>
              <Actions>
                <button className="searchBtn">Reserve your apartment</button>
                <div className="ratingGroup">
                  <div className="rating">
                    <div className="reviews">
                      <h2>Fabulous</h2>
                      <p>1,307 reviews</p>
                    </div>
                    <p className="degree">4.6</p>
                  </div>
                  <div className="ratingStars">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStarHalfStroke} />
                  </div>
                </div>
              </Actions>
            </DetailsWrapper>
            <Gallery images={galleryImages} />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Details = styled.div`
  * {
    margin: 0;
  }
  color: ${(p: any) => p.theme.color["primary-dark"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  .address {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }
  .wifi {
    margin-top: 20px;
    color: #4c4a4a;
  }
  .bus {
    color: #4c4a4a;
  }
  .locationIcon {
    width: 20px;
    height: 20px;
  }
`;
const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .searchBtn {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    background-color: ${(p: any) => p.theme.color["primary-lighter"]};
    border: 1px solid ${(p: any) => p.theme.color["primary-dark"]};
    cursor: pointer;
    font-weight: 400;
    color: ${(p: any) => p.theme.color["primary-dark"]};
    border-radius: 3px;
    transition: 0.5s ease-in-out;
  }
  .searchBtn:hover {
    transform: scale(1.05);
  }
  .ratingStars {
    display: flex;
    justify-content: end;
  }
  .star {
    width: 26px;
    color: ${(p: any) => p.theme.color["yellow"]};
    height: 26px;
  }
  .rating {
    * {
      margin: 0;
    }
    justify-content: end;
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
    color: ${(p: any) => p.theme.color["primary-dark"]};
  }
  .reviews > h2 {
    font-size: 18px;
    font-weight: 500;
  }
  .reviews > p {
    font-size: 14px;
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
`;
export default Hotel;
