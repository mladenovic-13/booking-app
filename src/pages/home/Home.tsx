import React from "react";
import styled from "styled-components";
import Featured from "../../components/Featured";
import FeaturedHotels from "../../components/FeaturedHotels";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import PropertyList from "../../components/PropertyList";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeContainer>
        <FeaturedHotels />
        <Featured />
        <PropertyList />
      </HomeContainer>
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
