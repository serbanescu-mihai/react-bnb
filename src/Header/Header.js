import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="website-header">
      <div className="logo">
        <a href="#home">
          <img src="./images/logo.png" alt="" />
        </a>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
