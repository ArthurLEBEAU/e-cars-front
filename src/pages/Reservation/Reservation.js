import React from "react";

import "./Reservation.css";
import SearchReservation from "../../components/sections/SearchReservation";
import { useTranslation } from "react-i18next";


export default function Reservations() {
	
	const { t } = useTranslation();
	return (
		<>
			<div className='Ap1'>
				<div className='herop-container'>
					<div className='diag'>
					{t("titleReservation")}
					</div>
				</div>
			</div>
			<div className='reservation_page'>
			
				<div className='reservation_now'>
					<div className='nve'> {t("searchReservation")}</div>
					<SearchReservation />

				</div>

			</div>



		</>
	);
}
