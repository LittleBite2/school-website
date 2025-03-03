import Header from "./components/Header"
import About from "./pages/About"
import Admission from "./pages/Admission"
import Home from "./pages/Home"
import { Routes, Route, Link } from "react-router"
import PublicDisclosure from "./pages/PublicDisclosure"
import Academic from "./pages/Academic"
import Achievement from "./pages/Achievement"
import Infrastructure from "./pages/Infrastructure"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"



function App() {


  return (
    <>
      {/* header */}
      {/* <h1 className="h-[30px]">This is header</h1>
      <div className="flex gap-x-10">
      <Link to="/">Home</Link>
      <Link to="About">About Us</Link>
      <Link to="Admission">Admission</Link>
      </div> */}
      <Header />
      {/* body */}
      <Routes >
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admission" element={<Admission />} />
        <Route path="PublicDisclosure" element={<PublicDisclosure />} />
        <Route path="academic" element={<Academic />} />
        <Route path="Achievement" element={<Achievement />} />
        <Route path="Infrastructure" element={<Infrastructure />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      {/* footer */}
     
      <Footer />
    </>
  )
}


export default App
