import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import CardCar from "../subcomponents/CardCar";
import UseFetch from "../../services/UseFetch";
import {
	LoadingOutlined
  } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { useSelector } from "react-redux";
function Cards() {

	const { t } = useTranslation();
	// eslint-disable-next-line no-undef
	const { DATA: CARSDATA , ISLOADED } = UseFetch(process.env.REACT_APP_API_URL + "car/");
	const search = useSelector((state) => state.searchSlice.search);

	function rechercherElements(tableau, critere) {
		const resultats = tableau.filter(element => {
			for (const key in critere) {
				if (Object.prototype.hasOwnProperty.call(critere, key)) {
					if (element[key] !== critere[key]) {
						return false;
					}
				}
			}
			return true;
		});
	
		return resultats;
	}

	const dataCars =	CARSDATA &&  rechercherElements(CARSDATA, search);
	console.log(search);

		return (
			<div className='cards'>
				{
					ISLOADED ?<LoadingOutlined /> : <div> {CARSDATA != null ?
						(
							<div className='grid_container'>
								{
									dataCars.map((item) => (
										<CardCar key={item.id} car={item} className="grid_item"></CardCar>
									))
								}
							</div>
						) : (
							<div className='grid_container'> {t("sorryNotCar")} </div>
						)
					} 
		
					<div className="centerElement">
						<Link
							to='/fleet'
						>
							<Button type="primary" size="large" >{t("seeAll")}</Button>
		
		
						</Link>
					</div>
					</div>
				}


				
	
			</div>
		);
	


}

export default Cards;
