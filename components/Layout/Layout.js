import FloatingButton from "../FloatingButton/FloatingButton.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={css.content}>{children}</div>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Layout;
