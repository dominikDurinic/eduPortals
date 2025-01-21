import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/About.css";

function About() {
  return (
    <>
      <Header current="about" />
      <main>
        <div className="gray-content-div">
          <div className="main-content">
            <div className="gray-text-content">
              <h1>Zašto je važno dijeliti znanje s drugima?</h1>
              <p>
                <span className="text-bold">Znanje</span> smatramo najvrjednijom
                “stvari” koju čovjek posjeduje.{" "}
              </p>
              <br />
              <p>
                Ono stvara vrijednost za cijeli svijet te se iz postojećeg
                znanja stvara novo znanje.Osim osobnog razvoja, znanje ima
                veliku i važnu ulogu u poslovanju. Često se ističe kako je
                znanje intelektualni kapital tvrtke te ga svaka tvrtka nastoji
                zadržati i razvijati.
              </p>
              <br />
              <p>
                Zaključujemo kako je{" "}
                <span className="text-bold">
                  učenje, dijeljenje i čuvanje znanja
                </span>{" "}
                vrlo važno u svakom segmentu našega života.
              </p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <img
            src="/images/think.png"
            className="about-img"
            alt="sharing knowledge"
          />
          <div className="reasons-div">
            <p>Navodimo sedam temeljnih razloga važnosti dijeljenje znanja:</p>
            <ol className="reasons-list">
              <li>Rast pojedinca</li>
              <br />
              <li>Poticaj i napredak</li>
              <br />
              <li>Suradnja i zajedništvo</li>
              <br />
              <li>Kontinuirano poboljšanje</li>
              <br />
              <li>Čuvanje znanja</li>
              <br />
              <li>Smanjenje nejednakosti</li>
              <br />
              <li>Osobna nagrada</li>
            </ol>
            <p>
              Detaljnije možete pročitati u{" "}
              <a href="#prirucnik" className="link">
                priručniku
              </a>
              .
            </p>
          </div>
        </div>
        <div className="gray-content-div">
          <div className="main-content">
            <div className="gray-text-content">
              <h1>Što su edukacijski portali?</h1>
              <p>
                <span className="text-bold">Internet</span> nam je omogućio brzo
                i jednostavno širenje znanja koje postaje dostupno svima. Stoga
                trebamo iskoristiti sve mogućnosti koje nam Internet pruža te
                međusobno dijeliti znanje s drugima.
              </p>
              <br />
              <p>
                Veliki broj nastavnika i stručnjaka iz raznih područja znanja
                priključuje se globalnom procesu dijeljenja znanja putem
                Interneta u obliku obrazovnih sadržaja.
              </p>
              <br />
              <p>
                Pristup obrazovnim sadržajima omogućen je putem posebno
                razvijenih web platformi koje nazivamo{" "}
                <span className="text-bold">edukacijskim portalima</span>.
              </p>
              <br />
              <p>
                Primarna uloga edukacijskih portala je edukacija korisnika i
                promicanje dijeljenja znanja na strukturiran i efikasan način.
              </p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="about-div">
            <div className="about-guide-div">
              <p>
                Danas postoje razni oblici edukacijskih portala na Internetu.
                Velika raznolikost edukacijskih portala otežava nam pronalazak
                odgovarajuće platforme za objavu vlastitih obrazovnih sadržaja.
                Edu Portals odabrao je edukacijske portale prema njihovoj
                popularnosti, kvaliteti i funkcionalnostima koje nude.
              </p>
              <br />
              <p>
                Ovisno o vlastitim preferencijama možete samostalno istražiti
                edukacijske portale putem ove web stranice ili čitanjem
                priručnika koji možete besplatno preuzeti u nastavku.
              </p>
              <br />
              <p>
                Dodatno na web stranici Vam nudimo mogućnost odabira idealne web
                platforme koja odgovara Vašim preferencijama.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="gray-content-div" id="prirucnik">
          <div className="main-content">
            <div className="download-div">
              <p>
                Preuzmite potpuno besplatno priručnik u PDF formatu pritiskom na
                tipku “Preuzmi”.
              </p>
              <img
                src="/images/prirucnikZaCitanje.png"
                className="prirucnik-img"
                alt="prirucnik"
              />
              <a
                href="Projekt_EduPortals_Durinic_Dominik.pdf"
                download={
                  "Prirucnik_edukacijski_portali_za_nastavnike_i_strucnjake"
                }
              >
                <button className="download-button">
                  Preuzmi
                  <img
                    src="/images/download.png"
                    alt="download icon"
                    className="download-icon"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
