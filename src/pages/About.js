import React from "react";
import "../App.css";
import Cards from "../components/sections/Cards";
import HeroPage from "../components/sections/HeroPage";
import Location from "../components/sections/Location";
import "./About.css";

import { useTranslation } from "react-i18next";
export default function About() {

	
	const { t } = useTranslation();
	return (
		<>
			<div className='Ap1'>
				<HeroPage />
			</div>
     
			<Location />
			<div className='nve'> {t("ourvehicles")} <span> E-cars</span></div>
			<Cards/>
     
		</>
	);
}
