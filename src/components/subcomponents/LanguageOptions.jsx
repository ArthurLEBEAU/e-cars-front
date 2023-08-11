import React , {useState}from "react";
import "./LanguageOption.css";
import  i18n  from "i18next";
function LanguageOptions() {


   const [first, setfirst] = useState("fr");


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    
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