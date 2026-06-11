import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { routes } from './routes'
import ParticleBg from "./components/ParticleBg"
import Menu from "./components/Menu"
import AboutMe from "./components/AboutMe"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import InitialTransition from "./components/InitialTransition"

function App() {
  return (
    <>
      <InitialTransition />
      <ParticleBg />
      <Navbar />
      <Routes>
        <Route path={routes.menu} element={<Menu />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.aboutme} element={<AboutMe />} />
        <Route path={routes.work} element={<Work />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>

    </>
  )
}

export default App