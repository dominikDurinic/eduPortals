import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../../data/eduPortals.json";
import "../style/EduPortals.css";
import { useState } from "react";

interface EduPortals {
  name: string;
  imgBW: string;
  imgCF: string;
}

function EduPortals() {
  const newData: EduPortals[] = JSON.parse(JSON.stringify(data));
  const [style, setStyle] = useState(-1);

  return (
    <>
      <Header current="eduportals" />
      <main>
        <div className="main-content">
          <div className="portals-btns-container">
            <p>Odaberite jedno od sljedećih edukacijskih portala:</p>
            <div className="portals-btns-div">
              {newData.map((portal, ind) => (
                <a href={`/eduportals/${portal.name}`} key={`${portal.name}`}>
                  <div
                    className={`portal-btn ${
                      style === ind ? `portal-btn-hover` : ""
                    }`}
                    onMouseOver={() => setStyle(ind)}
                    onMouseOut={() => setStyle(-1)}
                  >
                    <img
                      src={
                        style === ind
                          ? `/images/${portal.imgCF}`
                          : `/images/${portal.imgBW}`
                      }
                      className="portal-btn-img"
                      alt="coverImg"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EduPortals;
