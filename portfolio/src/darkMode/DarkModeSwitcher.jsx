import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) {
            return saved === "true";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <button className="dark-mode-toggle" type="button" onClick={() => setDarkMode(current => !current)} aria-label="Toggle Dark Mode">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
    );

}
export default DarkModeToggle;
