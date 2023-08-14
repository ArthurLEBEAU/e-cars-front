import React , {useState}from "react";
import "./LanguageOption.css";
import  i18n  from "i18next";
function LanguageOptions() {


   const [first, setfirst] = useState(localStorage.getItem("lang") ?? "fr");


  const changeLanguage = (lang) => {

    window.location.reload();
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setfirst(lang);
    

  };

  return (
    <div className="contentLang">


      <button onClick={()=>changeLanguage("fr")} className={`langButton ${first == "fr" ? "active" : ""}  `}>FR</button>
      <div>|</div>
      <button onClick={()=>changeLanguage("en")} className={`langButton ${first == "en" ? "active" : ""}  `}>EN</button>

    </div>
  );
}

export default LanguageOptions;