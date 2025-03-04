import About from "./componnents/About/About"
import About1 from "./componnents/About/About1"
import Contactus from "./componnents/ContactUs/Contactus"
import ESG from "./componnents/ESG/ESG"
import Footer from "./componnents/Footer/Footer"
import Header from "./componnents/Header/Header"
import HeaderComponent from "./componnents/Header/HeaderComponent"
import Hero from "./componnents/Hero/Hero"
import Hero1 from "./componnents/Hero/Hero1"
import Hero2 from "./componnents/Hero/Hero2"
import Team from "./componnents/Team/Team"
import VisitUs from "./componnents/VisitUs/VisitUs"


function App() {

  return (
    <>
    <Header/>
    {/* <HeaderComponent/> */}

    {/* <Hero/> */}
    {/* <Hero1/> */}
    <Hero2/>
    {/* <About/> */}
    <About1/>
<ESG/>
<Team/>
    <Contactus/>
    <VisitUs/>
    <Footer/>

    </>
  )
}

export default App
