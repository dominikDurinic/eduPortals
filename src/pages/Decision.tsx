import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Decision.css";
//import { useWindowSizeContext } from "../context/WindowSizeContext";
import { useEffect, useState } from "react";
import DecisionDiv from "../components/DecisionDiv";
import data from "../data/questions.json";

interface Question {
  id: number;
  name: string;
  responses: string[];
}

function Decision() {
  //const { mobileWindowSize } = useWindowSizeContext();

  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [finish, setFinish] = useState(false);
  const [questions, setQuestions] = useState<Question[] | undefined>();
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);

  useEffect(() => {
    setQuestions(JSON.parse(JSON.stringify(data)));
  }, []);

  const maxQuestions = questions && questions.length;

  const color = ["blue", "yellow", "green"];
  const answerId = ["A", "B", "C"];

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
            <DecisionDiv answers={answers} />
          ) : (
            <div className="quiz-container">
              {maxQuestions && (
                <>
                  <p className="quiz-guide">
                    Kviz se sastoji od {maxQuestions} pitanja s ponuđenim
                    odgovorima. Odaberite jedno od ponuđenih odgovora i na kraju
                    kviza saznajte koji edukacijski portal najbolje zadovoljava
                    Vaše potrebe.
                  </p>
                  <div className="quiz-div">
                    <div className="quiz-title-div">
                      <h3>
                        Pitanje {selectedQuestion} od {maxQuestions}
                      </h3>
                    </div>
                    {/*QUESTION* */}
                    <div className="quiz-btn quiz-question">
                      <p>{questions && questions[selectedQuestion - 1].name}</p>
                    </div>
                    {/*ANSWERS* */}
                    <div className="quiz-btns-div">
                      {questions &&
                        questions[selectedQuestion - 1].responses.map(
                          (resp, ind) => (
                            <div
                              className={`quiz-btn ${color[ind]}-border ${
                                selectedAns === ind && `${color[ind]}-back`
                              }`}
                              key={resp}
                              onClick={() => {
                                setSelectedAns(ind);
                                setAnswer(answerId[ind]);
                              }}
                            >
                              <p dangerouslySetInnerHTML={{ __html: resp }}></p>
                            </div>
                          )
                        )}
                      {/**BUTTON NEXT */}
                      <div
                        className={`quiz-btn gray-border ${
                          selectedAns === null && "disabled-next"
                        }`}
                        onClick={() => {
                          if (selectedQuestion < maxQuestions) {
                            setAnswers((answers) => [...answers, answer]);
                            setSelectedAns(null);
                            setSelectedQuestion(selectedQuestion + 1);
                          } else {
                            setAnswers((answers) => [...answers, answer]);
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
                </>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Decision;
