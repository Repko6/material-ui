import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import FirstTeam from "./pages/FirstTeam";
import Games from "./pages/Games";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/o-klubu" element={<About />} />
        <Route path="/utakmice" element={<Games />} />
        <Route path="/seniori" element={<FirstTeam />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/novosti" element={<News />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
