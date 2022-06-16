import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Item>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
          <li>Places of interest</li>
        </Item>
        <Item>
          <li>Homes</li>
          <li>Apartments</li>
          <li>Resorts</li>
          <li>Villas</li>
          <li>Hostels</li>
          <li>B&Bs</li>
          <li>Guest houses</li>
        </Item>
        <Item>
          <li>Unique places to stay</li>
          <li>All destinations</li>
          <li>Discover</li>
          <li>Reviews</li>
          <li>Unpacked: Travel articles</li>
          <li>Travel Communities</li>
          <li>Seasonal and holiday deals</li>
        </Item>
        <Item>
          <li>Car hire</li>
          <li>Flight finder</li>
          <li>Restaurant reservations</li>
          <li>Booking.com for Travel Agents</li>
        </Item>
        <Item>
          <li>Customer Service help</li>
          <li>Partner help</li>
          <li>Careers</li>
          <li>Sustainability</li>
          <li>Safety resurce centre</li>
          <li>Investor relations</li>
          <li>Term & Conditions</li>
        </Item>
      </Container>
      <p className="copy">Copyright ©2022 Mladenovic13. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  background-color: ${(p: any) => p.theme.color["primary-dark"]};
  .copy {
    margin-top: 30px;
    color: ${(p: any) => p.theme.color["primary-lighter"]};
    font-size: 14px;
  }
`;
const Container = styled.div`
  border-top: 1px solid ${(p: any) => p.theme.color["primary-lighter"]};
  border-bottom: 1px solid ${(p: any) => p.theme.color["primary-lighter"]};
  padding: 20px 0;
  width: 100%;
  max-width: 1024px;
  display: flex;
`;
const Item = styled.ul`
  list-style: none;
  color: ${(p: any) => p.theme.color["primary-lighter"]};
  font-size: 16px;
  margin: 0;
`;

export default Footer;
