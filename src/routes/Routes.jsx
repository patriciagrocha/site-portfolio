import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { AboutMe } from "../pages/aboutMe/AboutMe";
import { Portfolio } from "../pages/portfolio/Portfolio"
import { NotFound } from "../pages/notFound/NotFound";

function RoutesApp() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutMe" element={<AboutMe />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}
export { RoutesApp }