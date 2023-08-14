import React from "react";

import "./Location.css";

import { useTranslation } from "react-i18next";

function Location() {


	const { t } = useTranslation();

	return (
    
		<div className='locationContainer'>
			<div className='leftPart'>
				<div className='leftPartTitle'>
				{t("sndeTitle")}  <span>Premium</span>
     
				</div>
				<div className='leftPartText'>
        
				{t("descriptionAbout")}			</div>
        
     
			</div>
			<div className='rightPart'>
        
			</div>
       
		</div>
	);
}

export default Location;
