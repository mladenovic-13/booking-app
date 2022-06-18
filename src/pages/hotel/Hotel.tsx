import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SideSearch from "../../components/funtional/SideSearch";
import { Container, Wrapper } from "../../styles/style";
import Layout from "../../components/Layout/Layout";

const Hotel = () => {
  const location = useLocation();

  return (
    <Layout page="list">
      <Container>
        <Wrapper>
          <SearchWrapper>
            <SideSearch state={location.state} />
          </SearchWrapper>
          <ContentWrapper></ContentWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

const SearchWrapper = styled.div`
  flex: 1;
`;
const ContentWrapper = styled.div`
  flex: 3;
`;
export default Hotel;
