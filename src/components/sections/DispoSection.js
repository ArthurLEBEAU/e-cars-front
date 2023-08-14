import React, { useState } from "react";
import "./DispoSection.css";
import DatePicker from "../subcomponents/DatePicker";
import DropDown from "../subcomponents/Dropdown";

import { useTranslation } from "react-i18next";



function DispoSection(
 
) {
	
	const { t } = useTranslation();
	const [selected, setSelected] = useState("");
	const [driver, setDriver] = useState("");
	const [date, setDate] = useState(new Date());
	const [date1, setDate1] = useState(new Date());
	const OPTIONS1= [t("chooseModel") ,"BERLING","SUV","4X4","TOUT"];
	const  OPTIONS2= [t("withChauffeur"),t("withOutChauffeur")];
	const  STANDAR=[" Date de Départ", " Date de Retour",t("chooseModel"),t("chooseOption")]	;
  
	return (
		<div className='DispoSection_container'>
        
			<div className='flotingDiv'>
        
				<div className="customSelect">
					<span>01 </span>  {t("chooseModel")}
					<DropDown STANDAR={STANDAR[2]} selected={selected} setSelected={setSelected} options={OPTIONS1}></DropDown>
				</div>
				<div className="customSelect">
					<span>02 </span>{t("periode")}
					<div className='dateChoice'>
						<DatePicker date={date}  setDate={setDate} STANDAR={STANDAR[0]} ></DatePicker>
						<DatePicker date={date1}  setDate={setDate1}  STANDAR={STANDAR[1]} ></DatePicker>
					</div>

				</div>

				<div className="customSelect">
					<span>03 </span>{t("chauffeur")}
					<DropDown STANDAR={STANDAR[3]} selected={driver} setSelected={setDriver} options={OPTIONS2}></DropDown>
				</div>
				<div className='Trouver'>{t("find")}</div>
				<div className='filterPart'>
					<div className='flt'> {t("filter")} : </div>
					<div className='boxBn'>{t("autoBox")} </div>
					<div className='boxBn'> {t("manuelBox")} </div>
				</div>
        
			</div>
       

       
      
		</div>
	);
}

export default DispoSection;
