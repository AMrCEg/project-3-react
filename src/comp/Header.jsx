// import logo from "../images/logo.png"; // use this if move image folder to src folder

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src="./images/logo.png" alt="logo" />
        <h3 className="logo-title">Meme Generator</h3>
      </div>
      <h4 className="header-text">React Course - project 3</h4>
    </header>
  );
};

export default Header;
