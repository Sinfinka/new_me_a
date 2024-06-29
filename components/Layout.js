import Header from "./Header/Header.jsx";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
