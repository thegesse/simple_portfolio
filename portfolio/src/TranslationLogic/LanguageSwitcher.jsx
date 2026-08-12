import {useTranslation} from "react-i18next";

function LanguageSwitcher(){
    const {i18n} = useTranslation();

    return (
        <div>
            <button type="button" onClick={()=>i18n.changeLanguage('en')}>EN</button>

            <button type="button" onClick={()=>i18n.changeLanguage('fr')}>FR</button>
        </div>
    )
}

export default LanguageSwitcher;
