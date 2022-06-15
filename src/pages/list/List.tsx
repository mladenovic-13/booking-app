import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const List: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header page="list" />
    </>
  );
};

export default List;
