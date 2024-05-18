import { AboutMe } from "../cmps/AboutMe";
import { Projects } from "../cmps/Projects.jsx";
import { ContactMe } from "../cmps/ContactMe.jsx";
import { AppHeader } from '../cmps/AppHeader.jsx';
import  { useRef } from 'react';

export function HomePage() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToComponent = (component) => {
        switch (component) {
            case 'home':
                homeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about':
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <section className="Home-Page" ref={homeRef}>
            <AppHeader scrollToComponent={scrollToComponent} />
            <section className="title-card-container">
                <section className="title-card">
                    <section className="title-left">
                        <h3>Ben Goldberger</h3>
                        <p>Full Stack Developer & 3D Generalist</p>
                        <section className="links-pages">
                            <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href=""><i className="fa-brands fa-github"></i></a>
                        </section>
                    </section>
                    <img src="" alt="img" />
                </section>
            </section>
            <div ref={aboutRef}>
                <AboutMe />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div style={{width :'100%'}} ref={contactRef}>
                <ContactMe  />
            </div>
        </section>
    );
}