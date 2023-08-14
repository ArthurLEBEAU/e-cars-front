import React from "react";
import "../../App.css";

import "./HeroSection.css";

import { useTranslation } from "react-i18next";
function HeroSection() {
  
	const { t } = useTranslation();
	return (
		<div className='hero-container'>
			<div className='diag'>
				<div className='text'>
					<div className='text_p_h'>
						<div className='ecars'>E-CARS - LOCATION</div>
						<div className='mrq'>TOYOTA</div>
						<div className='mdl'>PRADO</div>
					</div>
        
					<div className='prx'>45 000F<span style={{ color: "red" }}>/j</span> </div>
					<div className='rsrv'><span id='bar ' style={{ color: "red" }} >______   </span> {t("reserveNow")}</div>
				</div>
        
        
			</div>

        

		</div>
	);
}

export default HeroSection;
