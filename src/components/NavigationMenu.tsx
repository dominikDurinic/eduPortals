function NavigationMenu() {
  return (
    <div className="navigationMenu-container">
      <a href="/about" className="nav-a">
        <div className="navMenu-div">
          <p className="navigation">O nama</p>
        </div>
      </a>
      <a href="/eduportals" className="nav-a">
        <div className="navMenu-div">
          <p className="navigation">Edu portali</p>
        </div>
      </a>
      <a href="/decision" className="nav-a">
        <div className="navMenu-div">
          <p className="navigation">Prijedlog</p>
        </div>
      </a>
    </div>
  );
}

export default NavigationMenu;
