import React, { useState } from "react";
import "./Welcome.css";
// import DatePicker from "../subcomponents/DatePicker";
import DropDown from "../subcomponents/Dropdown";

import { useTranslation } from "react-i18next";

import { Select, DatePicker, Button, Form, Radio, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/features/slices/searchSlice";


function Welcome(

) {
	const { RangePicker } = DatePicker;
	const { t } = useTranslation();

	const dispatch = useDispatch();
	// const [selected, setSelected] = useState(""),

	// 	[driver, setDriver] = useState(""),
	// 	[date, setDate] = useState(new Date()),
	// 	[date1, setDate1] = useState(new Date()),
	const OPTIONS1 = [t("chooseModel"), "BERLIN", "CITADINE", "SUV", "4X4", t("all")];
	const OPTIONS2 = [t("withChauffeur"), t("withOutChauffeur")];
	const STANDAR = [t("startDate"), t("endDate"), t("chooseModel"), t("chooseOption")];

	const Search = (value) => {
		console.log(value);
		dispatch(setSearch(value));
	};
	const [form] = Form.useForm();

	const onReset = () => {

		form.resetFields();
		dispatch(setSearch(null));
	};

	return (
		<div className='bienvenueContainer'>
			<Form form={form} onFinish={Search} layout="vertical" className='flotingDiv' style={{ zIndex: "999" }}>


				<div >

					<Form.Item
						label={`01. ${t("chooseModel")}`}
						name="modele"

					>
						<Select
							placeholder={t("chooseModel")}
							size="large"

							style={{ width: "100%" }}
							options={OPTIONS1.map((item) => ({
								value: item,
								label: item
							}))}
						/>
					</Form.Item>





					{/* <DropDown STANDAR={STANDAR[2]} selected={selected} setSelected={setSelected} options={OPTIONS1}></DropDown> */}
				</div>
				<div className="customSelect" style={{ width: "20%", flex: "none" }}>

					<Form.Item
						label={`02. ${t("periode")}`}
						name="periode"	>

						<RangePicker height="50%" size="small" />
						{/* <div className='dateChoice'>


		<DatePicker date={date} setDate={setDate} STANDAR={STANDAR[0]}  ></DatePicker>
		<DatePicker date={date1} setDate={setDate1} STANDAR={STANDAR[1]} ></DatePicker>
	</div> */}
					</Form.Item>

				</div>



				<Form.Item
					label={`03. ${t("chauffeur")}`}
					name="driver"

				>
					<Select
						placeholder={STANDAR[3]}
						size="large"

						style={{ width: "100%" }}
						options={OPTIONS2.map((item) => ({
							value: item,
							label: item
						}))}
					/>
				</Form.Item>



				<Row gutter={[16, 16]}>
					<Col >
						<Button type="default" size="large" onClick={onReset} >Arreter la recherche</Button>
					</Col>

					<Col >
						<Button type="primary" size="large" htmlType="submit" >{t("find")}</Button>
					</Col>
				</Row>

				{/* <div className='Trouver'>{t("find")}</div> */}



			</Form>

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
