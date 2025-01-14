function DecisionDiv() {
  return (
    <div className="quiz-container">
      <h3>Prijedlog</h3>
      <div className="quiz-btn quiz-decision">
        <div className="decision-div">
          <p>
            Analizom iskazanih potreba i provjerom kompatibilnosti edukacijskih
            portala odabrali smo edukacijski portal za Vas.
          </p>
          <div className="decision-card">
            <h3>Vaš idealni edukacijski portal je:</h3>
            <img
              src={`/images/udemy.png`}
              className="portal-btn-img"
              alt="coverImg"
            />

            <a href="/eduportals/udemy">
              <button className="tutor-link-btn">Pogledajte tutorial</button>
            </a>
            <a href="https://www.udemy.com/" className="edu-link">
              Poveznica na edukacijski portal
            </a>
          </div>
          <div className="decision-similar-edu">
            <p>
              Osim predstavnika, navodimo i nekoliko sličnih inačica
              edukacijskih portala koji zadovoljavaju većinu Vaših potreba.
            </p>
            <p className="text-bold">Coursera, Khan Academy, EdX, ....</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecisionDiv;
