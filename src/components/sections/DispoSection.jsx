import React from "react";
import "./DispoSection.css";
// import DatePicker from "../subcomponents/DatePicker";

import { useTranslation } from "react-i18next";
import { Button, Select, DatePicker, Form, Radio, Row, Col } from "antd";
import { setSearch } from "../../redux/features/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



function DispoSection(

) {

	const { RangePicker } = DatePicker;
	const onReset = () => {

		form.resetFields();
		dispatch(setSearch(null));
	};

	const dispatch = useDispatch();
	const { t } = useTranslation();
	const OPTIONS1 = ["BERLIN", "CITADINE", "SUV", "4X4", t("all")];
	const OPTIONS2 = [t("withChauffeur"), t("withOutChauffeur")];
	const STANDAR = [t("startDate"), t("endDate"), t("chooseModel"), t("chooseOption")];


	const Search = (value) => {
		console.log(value);
		dispatch(setSearch(value));
	};

	useEffect(() => {
		dispatch(setSearch(null));
	}, []);
	

	const search = useSelector((state) => state.searchSlice.search);
	const [form] = Form.useForm();


	const ChooseBox = (item) => {
		console.log(item, "'oomomom'");
		let searchBox = {
			...search,
			box: item
		};
		dispatch(setSearch(searchBox));

	};



	return (

		<div className='bienvenueContainer'>

			<Form form={form} onFinish={(value) => Search(value)} layout="vertical" className='flotingDiv' style={{ zIndex: "999" }}>


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
					{search && <Col >
						<Button type="default" size="large" onClick={onReset} >Arreter la recherche</Button>
					</Col>}


					<Col >
						<Button type="primary" size="large" htmlType="submit" >{t("find")}</Button>
					</Col>
				</Row>



				<Radio.Group onChange={(e) => ChooseBox(e.target.value)} buttonStyle="solid">
					<Radio.Button value="auto">Boite auto</Radio.Button>
					<Radio.Button value="manuel">Boite manuel</Radio.Button>

				</Radio.Group>
				
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
		// <div className='DispoSection_container'>

		// 	<div className='flotingDiv'>

		// 		<div className="customSelect">
		// 			<span>01 </span>  {t("chooseModel")}
		// 			<DropDown STANDAR={STANDAR[2]} selected={selected} setSelected={setSelected} options={OPTIONS1}></DropDown>
		// 		</div>
		// 		<div className="customSelect">
		// 			<span>02 </span>{t("periode")}
		// 			<div className='dateChoice'>
		// 				<DatePicker date={date}  setDate={setDate} STANDAR={STANDAR[0]} ></DatePicker>
		// 				<DatePicker date={date1}  setDate={setDate1}  STANDAR={STANDAR[1]} ></DatePicker>
		// 			</div>

		// 		</div>

		// 		<div className="customSelect">
		// 			<span>03 </span>{t("chauffeur")}
		// 			<DropDown STANDAR={STANDAR[3]} selected={driver} setSelected={setDriver} options={OPTIONS2}></DropDown>
		// 		</div>
		// 		<div className='Trouver'>{t("find")}</div>
		// 		<div className='filterPart'>
		// 			<div className='flt'> {t("filter")} : </div>
		// 			<div className='boxBn'>{t("autoBox")} </div>
		// 			<div className='boxBn'> {t("manuelBox")} </div>
		// 		</div>

		// 	</div>




		// </div>
	);
}

export default DispoSection;
