import { useEffect, useState } from "react";
import { getAdvicePortal } from "../decisionTree/decisionTreeLogic";
import { eduPortalUrl, similarPortals } from "../context/eduPortalUrl";

function DecisionDiv(props: { answers: string[] }) {
  const [advices, setAdvices] = useState<string[]>([]);

  useEffect(() => {
    setAdvices(getAdvicePortal(props.answers));
  }, [props.answers]);

  return (
    <div className="quiz-container">
      <h3>Prijedlog</h3>
      <a href={`/decision`}>
        <button className="again-btn">
          <img className="again-icon" src="/images/again.png" />
          Pokušajte ponovno
        </button>
      </a>
      <div className="quiz-btn quiz-decision">
        <div className="decision-div">
          <p>
            Analizom iskazanih potreba i provjerom kompatibilnosti edukacijskih
            portala odabrali smo{" "}
            {advices.length > 1 ? "edukacijske portale" : "edukacijski portal"}{" "}
            za Vas.
          </p>
          {advices.map((advice) => (
            <div className="decision-card" key={advice}>
              <h3>Vaš idealni edukacijski portal je:</h3>
              <img
                src={`/images/${advice}.png`}
                className="portal-btn-img"
                alt="coverImg"
              />

              <a href={`/eduportals/${advice}`}>
                <button className="tutor-link-btn">Pogledajte tutorial</button>
              </a>
              <a href={eduPortalUrl[advice]} className="edu-link">
                Poveznica na edukacijski portal
              </a>
            </div>
          ))}

          <div className="decision-similar-edu">
            <p>
              Osim predstavnika, navodimo i nekoliko sličnih inačica
              edukacijskih portala koji zadovoljavaju većinu Vaših potreba.
            </p>
            {advices.map((advice) => (
              <p className="text-bold similarPortals" key={advice}>
                <span className="text-normal">
                  {similarPortals[advice].name}
                </span>
                {" - "}
                {similarPortals[advice].simPortal}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecisionDiv;
