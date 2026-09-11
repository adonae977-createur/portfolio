import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Expertise from "./pages/Expertise"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Formation from "./pages/Formation"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="experiences" element={<Experience />} />
        <Route path="projets" element={<Projects />} />
        <Route path="projets/:slug" element={<ProjectDetail />} />
        <Route path="formation" element={<Formation />} />
        <Route path="galerie" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
