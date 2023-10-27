import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/Modal/Search"
import Proptypes from "prop-types";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false)
  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: Proptypes.node,
};

export default MainLayout;
