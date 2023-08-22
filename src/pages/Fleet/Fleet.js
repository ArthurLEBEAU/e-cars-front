import React from "react";
import Cards from "../../components/sections/Cards";
import DispoSection from "../../components/sections/DispoSection";


import "./Fleet.css";
import { useTranslation } from "react-i18next";

export default function Fleet() {


	const { t } = useTranslation();


	return (
		<>
			<div className='Ap2'>
				<div className='herop-container'>
					<div className='diag'>
					{t("titleFleet")}
					</div>
				</div>
			</div>
			<DispoSection />
    
			<div className='nve'> {t("ourvehicles")} <span style={{ color: "red" }}> E-cars</span></div>
			<Cards isFleet/>
     
		</>
	);
}
