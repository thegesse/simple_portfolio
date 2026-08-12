import {useTranslation} from 'react-i18next'
import projects from "./metadata/projects.json"
import {useRef, useState} from "react";

function CarrouselLogic() {
    const {t} = useTranslation();

    const [currentProject, setCurrentProject] = useState(0);
    const [slideDirection, setSlideDirection] = useState("next");
    const touchStartX = useRef(null);

    const nextProject = () => {
        setSlideDirection("next");
        setCurrentProject((current) => (current +1) % projects.length);
    };
    const previousProject = () => {
        setSlideDirection("previous");
        setCurrentProject((current) => (current - 1 + projects.length) % projects.length);
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;

        const horizontalDistance = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(horizontalDistance) < 50) return;
        if (horizontalDistance < 0) nextProject();
        else previousProject();
    };

    const project = projects[currentProject];
    return (
        <div
            className="projects"
            role="region"
            aria-roledescription="carousel"
            aria-label="Projects"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button className="carousel-arrow carousel-arrow-previous" type="button" onClick={previousProject} aria-label="Previous project">&larr;</button>
            <article key={project.id} className={`project-card project-card-${slideDirection}`}>
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
                        onClick={() => {
                            setSlideDirection(index > currentProject ? "next" : "previous");
                            setCurrentProject(index);
                        }}
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
