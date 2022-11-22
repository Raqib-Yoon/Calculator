import Navbar from "./Navbar";
import Hero from './Hero';
import Skills from './Skills_Section/Skills'
import './style.css'
import About from "./About_Section/About";
import Services from "./Services_Section/Services";
import Portfolio from './Portfolio_Section/Portfolio'
import Contact from "./Contact";
import Footer from "./Footer";


const index = () => {
    return (
        <>
            <div className='container'>
                <div class="hero" id="home">
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Services />
                    <Portfolio />
                    <Contact />
                    <Footer/>
                </div>

            </div>
        </>
    )
}

export default index;