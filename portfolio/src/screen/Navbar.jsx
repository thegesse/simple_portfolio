import LanguageSwitcher from "../TranslationLogic/LanguageSwitcher.jsx";
import {useTranslation} from "react-i18next";

function Navbar() {
    const {t} = useTranslation();
    return (
        <nav>
            <a href="#home">{t("nav.home")}</a>
            <a href="#about">{t("nav.about")}</a>
            <a href="#projects">{t("nav.projects")}</a>
            <a href="#contact">{t("nav.contact")}</a>

            <LanguageSwitcher />
        </nav>
    );
}

export default Navbar;

//reminder to make the section ids match these when aking main page