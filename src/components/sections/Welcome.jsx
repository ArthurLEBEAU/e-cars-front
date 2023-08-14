import React, { useState } from "react";
import "./Welcome.css";
// import DatePicker from "../subcomponents/DatePicker";
import DropDown from "../subcomponents/Dropdown";

import { useTranslation } from "react-i18next";

import { Select,DatePicker,Button } from "antd";


function Welcome(

) {
	const { RangePicker } = DatePicker;
	const { t } = useTranslation();
	const [selected, setSelected] = useState(""),

		[driver, setDriver] = useState(""),
		[date, setDate] = useState(new Date()),
		[date1, setDate1] = useState(new Date()),
		OPTIONS1 = [t("chooseModel"), "BERLIN", "CITADINE", "SUV", "4X4", t("all")],
		OPTIONS2 = [t("withChauffeur"), t("withOutChauffeur")],
		STANDAR = [" Date de Départ", " Date de Retour", t("chooseModel"), t("chooseOption")];

	return (
		<div className='bienvenueContainer'>
			<div className='flotingDiv'>
				<div className="customSelect">
					<span>01 </span> {t("chooseModel")}
					<Select
						placeholder={t("chooseModel")}
						size="large"
						defaultValue={OPTIONS1[0]}
						style={{ width: "100%" }}
						options={OPTIONS1.map((item) => ({
							value: item,
							label: item
						}))}
					/>
					{/* <DropDown STANDAR={STANDAR[2]} selected={selected} setSelected={setSelected} options={OPTIONS1}></DropDown> */}
				</div>
				<div className="customSelect" style={{ width:"20%",  flex:"none" }}>
					<span>02 </span>{t("periode")}
					<RangePicker height="50%" size="small"/>
					{/* <div className='dateChoice'>


						<DatePicker date={date} setDate={setDate} STANDAR={STANDAR[0]}  ></DatePicker>
						<DatePicker date={date1} setDate={setDate1} STANDAR={STANDAR[1]} ></DatePicker>
					</div> */}

				</div>

				<div className="customSelect">
					<span>03 </span>{t("chauffeur")}

					<Select
						placeholder={STANDAR[3]}
						size="large"
						
						style={{ width: "100%" }}
						options={OPTIONS2.map((item) => ({
							value: item,
							label: item
						}))}
					/>
					{/* <DropDown STANDAR={STANDAR[3]} selected={driver} setSelected={setDriver} options={OPTIONS2}></DropDown> */}
				</div>

				<Button  type="primary" size="large" >{t("find")}</Button>
				{/* <div className='Trouver'>{t("find")}</div> */}

			</div>

			<div className='container1'>

				<div className='petitText'> {t("miniTitle")}</div>
				<div className='grandText'> {t("bigTitle1")} <span className='TextRed'> {t("bigTitle2")}</span></div>
				<div className='petitText'>
					{t("miniText")}

				</div>
			</div>
			<div className='container2'>

				<figure className='item1'>
					<img className='imgB' id="space" src='images/Groupe16810.svg' alt='logo' />
					<figcaption>{t("option1")}</figcaption>
				</figure>
				<figure className='item2'>
					<img className='imgB' id="space" src='images/Groupe16809.svg' alt='' />
					<figcaption>{t("option2")}</figcaption>
				</figure>
				<figure className='item3'>
					<img className='imgB' id="space" src='images/Groupe16808.svg' alt='' />
					<figcaption> {t("option3")}</figcaption>
				</figure>
			</div>




		</div>
	);
}

export default Welcome;
