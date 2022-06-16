import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ResultItem from "./ResultItem";
import SideSearch from "../../components/funtional/SideSearch";

const List = () => {
  return (
    <>
      <Navbar />
      <Header page="list" />
      <ListContainer>
        <ListWrapper>
          <SideSearch />
          <ListResult>
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
          </ListResult>
        </ListWrapper>
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 20px;
`;
const ListResult = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default List;
