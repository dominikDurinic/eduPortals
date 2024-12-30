import { Navigate, useParams } from "react-router-dom";
import "../style/Tutorial.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import data from "../../data/eduPortals.json";
import SideBarHeading from "../components/SideBarHeading";
import { useEffect, useState } from "react";
import VideoGuide from "../components/VideoGuide";

export interface Tutorial {
  id: number;
  name: string;
  description: string;
  video: string;
}

function Tutorial() {
  const portal = useParams();

  const [data, setData] = useState<Tutorial[]>();

  useEffect(() => {
    fetch(`../../data/${portal.name}.json`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching the JSON file:", error));
  }, []);

  const [selectedHeading, setSelectedHeading] = useState(1);

  const portals = [
    "edutorij",
    "thinkific",
    "teachable",
    "udemy",
    "khan-academy",
    "google-classroom",
    "moodle",
    "loomen",
  ];

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
                <div className="img-logo-div">
                  <img
                    src={`/images/${portal.name}.png`}
                    className="logo-img-sidebar"
                    alt="logo"
                  />
                </div>
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
                <a href="/eduportals" className="tutorial-a">
                  <div className="back-button-div">
                    <img src="/images/back.png" alt="back icon" />
                    Povratak
                  </div>
                </a>
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
                    <img src="/images/back.png" /> Prethodni
                  </button>
                  <h3>
                    {data
                      ? selectedHeading > 2
                        ? `Tutorial ${selectedHeading - 2} : ${
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
                    Sljedeći <img src="/images/next.png" />
                  </button>
                </div>
                <VideoGuide data={data} ind={selectedHeading} />
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
