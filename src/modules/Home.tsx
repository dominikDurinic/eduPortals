import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/Home.css";
import data from "../../data/home.json";
import { useState } from "react";
import LogoBar from "../components/LogoBar";

interface HomeData {
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

function Home() {
  const newData: HomeData[] = JSON.parse(JSON.stringify(data));

  const [style, setStyle] = useState(-1);

  return (
    <>
      <Header current="" />
      <main>
        <div className="gray-content-div">
          <div className="main-content">
            <div className="gray-text-content">
              <h1>
                Želite li podijeliti vlastito znanje s drugima, ali ne znate na
                koji način?
              </h1>
              <p>
                <span className="text-bold">eduPORTALS</span> Vam omogućuje
                pregled odabranih edukacijskih portala za objavu i dijeljenje
                obrazovnih sadržaja na Internetu te izbor odgovarajuće web
                platforme s obzirom na Vaše preference.
              </p>
            </div>
            <img
              src="/images/home.png"
              className="home-img"
              alt="sharing knowledge"
            />
          </div>
        </div>
        <div className="main-content">
          <div className="home-butns-div">
            <p>Odaberite jedno od navedenih područja:</p>
            <div className="btns-container">
              {newData.map((data, ind) => (
                <a href={data.link} key={`${ind}`}>
                  <div
                    className={`home-btn ${
                      style === ind ? `home-btn-${ind + 1}` : ""
                    }`}
                    style={{ borderColor: data.color }}
                    onMouseOver={() => setStyle(ind)}
                    onMouseOut={() => setStyle(-1)}
                  >
                    <img
                      src={data.image}
                      className="home-btn-img"
                      alt="coverImg"
                    />
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="main-content">
          <LogoBar />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
