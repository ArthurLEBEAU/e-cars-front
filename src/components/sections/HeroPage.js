import React from "react";
import "../../App";

import "./HeroPage.css";

import { useTranslation } from "react-i18next";
function HeroPage() {
  
	const { t } = useTranslation();
	return (
		<div className='herop-container'>
			<div className='diag'>
			{t("titleAbout")}
			</div>
		</div>
	);
}

export default HeroPage;
