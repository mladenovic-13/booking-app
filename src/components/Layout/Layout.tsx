import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MailList from "../MailList";
import Navbar from "../Navbar";

type Props = {
  children: JSX.Element;
  page?: string;
};
const Layout: React.FC<Props> = ({ children, page }) => {
  return (
    <>
      <Navbar />
      <Header page={page} />

      {children}

      <MailList />
      <Footer />
    </>
  );
};

export default Layout;
