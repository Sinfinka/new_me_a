import FloatingButton from "../FloatingButton/FloatingButton.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import ScrollTop from "../ScrollTop/ScrollTop.js";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={css.content}>{children}</div>
      <Footer />
      <FloatingButton />
      <ScrollTop />
    </div>
  );
};

export default Layout;
