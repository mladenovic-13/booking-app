import React from "react";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import SideSearch from "../../components/funtional/SideSearch";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const List = () => {
  const location = useLocation();

  return (
    <>
      <Layout page="list">
        <ListContainer>
          <ListWrapper>
            <SideSearch state={location.state} />
            <ListResult>
              <ResultItem state={location.state} />
              <ResultItem state={location.state} />
              <ResultItem state={location.state} />
              <ResultItem state={location.state} />
              <ResultItem state={location.state} />
              <ResultItem state={location.state} />
            </ListResult>
          </ListWrapper>
        </ListContainer>
      </Layout>
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
