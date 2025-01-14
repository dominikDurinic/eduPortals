import { Navigate, useParams } from "react-router-dom";
import "../style/Tutorial.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBarHeading from "../components/SideBarHeading";
import { useEffect, useState } from "react";
import VideoGuide from "../components/VideoGuide";
import { useWindowSizeContext } from "../context/WindowSizeContext";
import { eduPortalUrl, portals } from "../context/eduPortalUrl";

export interface Tutorial {
  id: number;
  name: string;
  description: string[];
  pros?: string[];
  cons?: string[];
  video: string;
}

function Tutorial() {
  const portal = useParams();

  const [data, setData] = useState<Tutorial[]>();
  const [selectedHeading, setSelectedHeading] = useState(1);
  const [openNav, setOpenNav] = useState(false);

  const { mobileWindowSize } = useWindowSizeContext();

  useEffect(() => {
    fetch(`../../public/data/${portal.name}.json`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching the JSON file:", error));
  }, []);

  useEffect(() => {
    setOpenNav(false);
  }, [selectedHeading]);

  const selectHead = (selHead: number) => {
    setSelectedHeading(selHead);
  };

  return (
    <>
      {portal.name && portals.includes(portal.name) ? (
        <>
          <Header current="eduportals" />
          <main className="gray-div">
            <div className="tutorial-content">
              <div className="sidebar-container">
                <a href={eduPortalUrl[portal.name]} className="img-logo-div">
                  <div className="img-logo-div">
                    <img
                      src={`/images/${portal.name}.png`}
                      className="logo-img-sidebar"
                      alt="logo"
                    />
                  </div>
                </a>
                {mobileWindowSize && (
                  <div
                    className="sidebar-menu"
                    onClick={() => setOpenNav(!openNav)}
                  >
                    <p>Izbor poglavlja</p>
                    <img
                      src={openNav ? "/images/up.png" : "/images/down.png"}
                    />
                  </div>
                )}
                {mobileWindowSize ? (
                  openNav ? (
                    <div className="side-bar-div">
                      {data?.map((heading) => (
                        <SideBarHeading
                          key={heading.id}
                          h_name={heading.name}
                          id={heading.id}
                          selectHead={selectHead}
                          selected={selectedHeading}
                        />
                      ))}
                    </div>
                  ) : null
                ) : (
                  <div className="side-bar-div">
                    {data?.map((heading) => (
                      <SideBarHeading
                        key={heading.id}
                        h_name={heading.name}
                        id={heading.id}
                        selectHead={selectHead}
                        selected={selectedHeading}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="tutorial-content-div">
                <div className="tutorial-title-nav-bar">
                  <button
                    className={`nav-tut-button ${
                      selectedHeading === 1 && "disabled-btn"
                    }`}
                    onClick={() => setSelectedHeading(selectedHeading - 1)}
                    disabled={selectedHeading === 1}
                  >
                    <img src="/images/back.png" />{" "}
                    {mobileWindowSize ? "" : "Prethodni"}
                  </button>
                  <h3>
                    {data
                      ? selectedHeading > 3
                        ? `Tutorial ${selectedHeading - 3} : ${
                            data[selectedHeading - 1].name
                          }`
                        : data[selectedHeading - 1].name
                      : null}
                  </h3>
                  <button
                    className={`nav-tut-button next-btn ${
                      selectedHeading === data?.length && "disabled-btn-next"
                    }`}
                    onClick={() => setSelectedHeading(selectedHeading + 1)}
                    disabled={selectedHeading === data?.length}
                  >
                    {mobileWindowSize ? "" : "Sljedeći"}{" "}
                    <img src="/images/next.png" />
                  </button>
                </div>
                <VideoGuide
                  data={data}
                  ind={selectedHeading}
                  key={selectedHeading}
                />
              </div>
            </div>
          </main>
          <Footer />
        </>
      ) : (
        <Navigate to={"/eduportals"} replace />
      )}
    </>
  );
}

export default Tutorial;
