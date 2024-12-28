import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./modules/Home";
import About from "./modules/About";
import EduPortals from "./modules/EduPortals";
import Decision from "./modules/Decision";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="eduportals" element={<EduPortals />} />
            <Route path="decision" element={<Decision />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
