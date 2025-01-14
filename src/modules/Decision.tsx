import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Decision.css";
import { useWindowSizeContext } from "../context/WindowSizeContext";
import { useEffect, useState } from "react";
import DecisionDiv from "../components/DecisionDiv";
import data from "../../src/data/questions.json";

interface Question {
  id: number;
  name: string;
  responses: string[];
}

function Decision() {
  const { mobileWindowSize } = useWindowSizeContext();

  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [finish, setFinish] = useState(false);
  const [questions, setQuestions] = useState<Question[] | undefined>();

  const maxQuestions = 5;

  useEffect(() => {
    setQuestions(JSON.parse(JSON.stringify(data)));
  }, []);

  const color = ["blue", "yellow", "green"];

  return (
    <>
      <Header current="decision" />
      <main>
        <div className="gray-content-div">
          <div className="main-content">
            <div className="gray-text-content">
              <h1>
                Niste sigurni koji edukacijski portal najbolje odgovara Vašim
                potrebama?
              </h1>
              <p>
                Odgovorite na nekoliko pitanja u našem kvizu i povratno ćemo Vam
                preporučiti edukacijske portale koji odgovaraju Vašim potrebama.
              </p>
            </div>
            <img
              src="/images/decision.png"
              className="decision-img"
              alt="sharing knowledge"
            />
          </div>
        </div>
        <div className="quiz-content">
          {finish ? (
            <DecisionDiv />
          ) : (
            <div className="quiz-container">
              <p className="quiz-guide">
                Kviz se sastoji od {maxQuestions} pitanja s ponuđenim
                odgovorima. Odaberite jedno od ponuđenih odgovora i na kraju
                kviza saznajte koji edukacijski portal najbolje zadovoljava Vaše
                potrebe.
              </p>
              <div className="quiz-div">
                <div className="quiz-title-div">
                  {!finish && (
                    <button
                      className={`nav-tut-button ${
                        selectedQuestion === 1 ? "disabled-btn" : ""
                      }`}
                      onClick={() => setSelectedQuestion(selectedQuestion - 1)}
                      disabled={selectedQuestion === 1}
                    >
                      <img src="/images/back.png" />{" "}
                      {mobileWindowSize ? "" : "Prethodno"}
                    </button>
                  )}
                  <h3>
                    Pitanje {selectedQuestion} od {maxQuestions}
                  </h3>
                  <button
                    className={`nav-tut-button next-btn`}
                    onClick={() => {
                      if (selectedQuestion < maxQuestions) {
                        setSelectedQuestion(selectedQuestion + 1);
                      } else {
                        setFinish(true);
                      }
                    }}
                  >
                    {mobileWindowSize
                      ? `${selectedQuestion === maxQuestions ? "Završi " : ""}`
                      : `${
                          selectedQuestion === maxQuestions
                            ? "Završi "
                            : "Sljedeće "
                        }`}{" "}
                    <img src="/images/next.png" />
                  </button>
                </div>
                <div className="quiz-btn quiz-question">
                  <p>{questions && questions[selectedQuestion - 1].name}</p>
                </div>

                <div className="quiz-btns-div">
                  {questions &&
                    questions[selectedQuestion - 1].responses.map(
                      (resp, ind) => (
                        <div
                          className={`quiz-btn ${color[ind]}-border`}
                          key={resp}
                        >
                          <p dangerouslySetInnerHTML={{ __html: resp }}></p>
                        </div>
                      )
                    )}
                  <div
                    className={`quiz-btn gray-border`}
                    onClick={() => {
                      if (selectedQuestion < maxQuestions) {
                        setSelectedQuestion(selectedQuestion + 1);
                      } else {
                        setFinish(true);
                      }
                    }}
                  >
                    <p className="text-bold">
                      {selectedQuestion === maxQuestions
                        ? "Završi "
                        : "Sljedeće "}
                    </p>
                    <img className="next-img" src="/images/next.png" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Decision;
