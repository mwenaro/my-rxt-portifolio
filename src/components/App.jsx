import Header from "./header";
import Home from  "./home";
import About from  "./about";
import Nav from  "./nav";
import Experience from  "./experience";
import Contact from  "./contact";
import Skills from  "./skills";
import Projects from  "./projects";
import Testimonials from  "./testimonials";
import Footer from  "./footer";


export default function App(){
    return (
        <div>
            <Header />
            <Nav />
            <Home />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}