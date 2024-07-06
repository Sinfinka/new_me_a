import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={css.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
