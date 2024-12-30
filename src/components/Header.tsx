import { useState } from "react";
import "../style/Header.css";
import { useWindowSizeContext } from "../context/WindowSizeContext";
import NavigationMenu from "./NavigationMenu";

function Header(props: { current: string }) {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [eduPortals, setEduPortals] = useState(false);
  const [decision, setDecision] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { mobileWindowSize } = useWindowSizeContext();

  return (
    <div className="header-container">
      <div className="header-div">
        <a href="/">
          <img src="/images/logo.png" alt="logo" className="logo-header" />
        </a>
        {mobileWindowSize ? (
          <>
            {menuOpen ? (
              <img
                src="/images/cross.png"
                alt="logo"
                className="menu-icon"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <img
                src="/images/menu.png"
                alt="logo"
                className="menu-icon"
                onClick={() => setMenuOpen(true)}
              />
            )}
            {menuOpen && <NavigationMenu />}
          </>
        ) : (
          <div className="navigation-div">
            <a href="/">
              <div
                className="nav-div"
                onMouseOver={() => setHome(true)}
                onMouseOut={() => setHome(false)}
              >
                <p className="navigation">Početna</p>

                <div
                  className="stick-white"
                  style={{
                    visibility:
                      home || props.current == "home" ? "visible" : "hidden",
                  }}
                ></div>
              </div>
            </a>
            <a href="/about">
              <div
                className="nav-div"
                onMouseOver={() => setAbout(true)}
                onMouseOut={() => setAbout(false)}
              >
                <p className="navigation">O nama</p>

                <div
                  className="stick-blue"
                  style={{
                    visibility:
                      about || props.current == "about" ? "visible" : "hidden",
                  }}
                ></div>
              </div>
            </a>
            <a href="/eduportals">
              <div
                className="nav-div"
                onMouseOver={() => setEduPortals(true)}
                onMouseOut={() => setEduPortals(false)}
              >
                <p className="navigation">Edu portali</p>

                <div
                  className="stick-green"
                  style={{
                    visibility:
                      eduPortals || props.current == "eduportals"
                        ? "visible"
                        : "hidden",
                  }}
                ></div>
              </div>
            </a>
            <a href="/decision">
              <div
                className="nav-div"
                onMouseOver={() => setDecision(true)}
                onMouseOut={() => setDecision(false)}
              >
                <p className="navigation">Prijedlog</p>

                <div
                  className="stick-yellow"
                  style={{
                    visibility:
                      decision || props.current == "decision"
                        ? "visible"
                        : "hidden",
                  }}
                ></div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
