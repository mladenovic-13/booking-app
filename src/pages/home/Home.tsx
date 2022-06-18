import React from "react";
import styled from "styled-components";
import Featured from "../../components/Featured";
import FeaturedHotels from "../../components/FeaturedHotels";
import Layout from "../../components/Layout/Layout";
import PropertyList from "../../components/PropertyList";

const Home: React.FC = () => {
  return (
    <div>
      <Layout>
        <HomeContainer>
          <FeaturedHotels />
          <Featured />
          <PropertyList />
        </HomeContainer>
      </Layout>
    </div>
  );
};

const HomeContainer = styled.div`
  color: ${(p: any) => p.theme.color["primary-dark"]};
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export default Home;
