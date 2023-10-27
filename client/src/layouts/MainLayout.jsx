import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: Proptypes.node,
};

export default MainLayout;
