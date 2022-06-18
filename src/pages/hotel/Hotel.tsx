import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SideSearch from "../../components/funtional/SideSearch";
import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/gallery/Gallery";
import { galleryImages } from "../../util/data";
import MapWrapper from "../../components/google-map/MapWrapper";

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
  gap: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;
export default Hotel;
