import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./modules/Home";
import About from "./modules/About";
import EduPortals from "./modules/EduPortals";
import Decision from "./modules/Decision";
import Tutorial from "./modules/Tutorial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="eduportals" element={<EduPortals />} />
            <Route path="eduportals/:name" element={<Tutorial />} />
            <Route path="decision" element={<Decision />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
