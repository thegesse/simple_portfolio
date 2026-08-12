import {useTranslation} from 'react-i18next'
import projects from "./metadata/projects.json"
import {useState} from "react";

function CarrouselLogic() {
    const {t} = useTranslation();

    const [currentProject, setCurrentProject] = useState(0);
    const nextProject = () => {
        setCurrentProject((current) => (current +1) % projects.length);
    };
    const previousProject = () => {
        setCurrentProject((current) => (current - 1 + projects.length) % projects.length);
    }

    const project = projects[currentProject];
    return (
        <div className="projects">
            <button className="carousel-arrow carousel-arrow-previous" type="button" onClick={previousProject} aria-label="Previous project">&larr;</button>
            <article>
                <h3>{t(`project.${project.id}.title`)}</h3>
                <p>{t(`project.${project.id}.description`)}</p>

                <div className="technologies">
                    {project.technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
            </article>
            <div className="carrousel-indicator">
                {projects.map((project, index) => (
                    <button
                        key={project.id}
                        type="button"
                        onClick={() => setCurrentProject(index)}
                        className={index === currentProject ? "active" : ""}
                        aria-label={`Show project ${index + 1}: ${t(`project.${project.id}.title`)}`}
                        aria-current={index === currentProject ? "true" : undefined}
                    />
                ))}
            </div>
            <button className="carousel-arrow carousel-arrow-next" type="button" onClick={nextProject} aria-label="Next project">&rarr;</button>
        </div>
    );
}
export default CarrouselLogic;
