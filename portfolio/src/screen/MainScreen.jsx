import {useTranslation} from 'react-i18next'
import CarrouselLogic from "../carrousel/CarrouselLogic.jsx";
import NavBar from "./Navbar.jsx"
import ProfilePicture from "../images/profile_picture.png"
import ContactForm from "../contactForm/ContactForm.jsx";

function MainScreen() {
    const{t} = useTranslation();

    return (
        <>
            <header>
                <NavBar />
            </header>
            <section id="home">

                <div className="homeContainer">
                    <div className="hero">
                        <div className="profile-image">
                            <img loading="lazy" src={ProfilePicture} alt="Profile picture"/>
                        </div>

                        <div className="hero-copy">
                            <h2>{t("hero.title")}</h2>
                            <h3>{t("hero.subtitle")}</h3>
                        </div>
                    </div>

                    <div className="presentation">
                        <p>{t("presentation.text")}</p>
                    </div>
                </div>
            </section>

            <section id="about">
                <h2>{t("about.about")}</h2>
                <p>{t("about.about_me")}</p>

                <div className="techStack">
                    <h3>{t("about.tech_stack")}</h3>
                    <div>
                        <h4>{t("about.languages")}</h4>
                        <ul>
                            <li>Java</li>
                            <li>Dart</li>
                            <li>Kotlin</li>
                            <li>JavaScript</li>
                            <li>C</li>
                            <li>MicroPython</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t("about.frontend")}</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>tailwindCSS</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t("about.frameworks")}</h4>
                        <ul>
                            <li>Spring boot</li>
                            <li>Quarkus</li>
                            <li>Flutter</li>
                            <li>Vue.js</li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t("about.database")}</h4>
                        <ul>
                            <li>postgreSQL</li>
                            <li>MySQL</li>
                            <li>H2</li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t("about.tools_and_environment")}</h4>
                        <ul>
                            <li>Git</li>
                            <li>Postman</li>
                            <li>Linux</li>
                            <li>Fedora</li>
                            <li>EndeavourOS</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="projects">
                <h3>{t("project.projects")}</h3>
                <p>{t("project.text")}</p>

                <CarrouselLogic />
            </section>

            <section id="contact">
                <h3>{t("contact.contact_me")}</h3>
                <p>{t("contact.text")}</p>
                <ContactForm />

                <div className="socials">
                    <h3>{t("contact.socials")}</h3>
                    <ul>
                        <a href="https://github.com/thegesse" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://www.linkedin.com/in/esteban-quillerier/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        <a href="https://www.instagram.com/geese_paiting/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </ul>
                </div>
            </section>
       </>
    )
}


export default MainScreen;






