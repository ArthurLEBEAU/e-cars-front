import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import Modal from "./Modal";
import { Card, Button } from "antd";
import "./CardCar.css";
import { useTranslation } from "react-i18next";
function CardCar({ car }) {

	const [openModal, setOpenModal] = useState(false);

	const marqModel = car.brand + " " + car.model;

	const [hoverRef, isHovered] = useHover();
	const { Meta } = Card;

	const { t } = useTranslation();
	return (

		<>



			<Card
				onClick={() => setOpenModal(true)}
				hoverable
				ref={hoverRef}

				cover={<div className='coverCard ' style={{ backgroundImage: isHovered ? `url("${car.image2}")` : `url("${car.image1}")` }}>
					<Button style={{ display: isHovered ? "block" : "none" }} type="primary">
					{t("seeMore")}
					</Button>


				</div>}
			>



				<Meta title={<h2 style={{ textAlign: "center" }}>{marqModel}</h2>} />


				<ul className='card-content'>
					<li>{car.year} </li>
					<li> |</li>
					<li>{car.mileage} KM </li>
					<li> |</li>
					<li>{car.motor} </li>
					<li> |</li>
					<li>{car.box} </li>
				</ul>


				<div className='btn_space2'>
					<div className='btn_space2_h'>{t("toLeave")}</div>
					<div className='btn_space2_b'> <span style={{ fontSize: 20, fontWeight: "bold" }}>{car.price_no_driver}</span>  CFA/Jour</div>
				</div>

			</Card>

			{/* <div onClick={()=>setOpenModal(true)} className='cards_car'>
        
				<div ref={hoverRef}  className='top_space' style={{backgroundImage:isHovered? undefined:`url("${car.image1}")`}}>
					<div
						className='PLUS'
        
					>
          			En savoir plus
					</div>


				</div>

				<div className='botm_space'> 
					<div className='btn_space1'>

          
						<h3 className='btn_space1_h'> {marqModel}  </h3>
						<div className='btn_space1_b'>
							<ul className='nav-menuC'>
								<li>{car.year} </li>
								<li> |</li>
								<li>{car.mileage} KM </li>
								<li> |</li> 
								<li>{car.motor} </li>
								<li> |</li>
								<li>{car.box} </li> 
							</ul> 
						</div>
					</div>
					{
						car.driver &&<div  className='btn_space2'>
						<div className='btn_space2_h'> À partir de</div>
						<div className='btn_space2_b'> {car.price} CFA/Jour</div>
					</div>
					}
					
       
				</div>
			</div> */}









			<Modal car={car} marqModel={marqModel}
				open={openModal}
				onClose={() => setOpenModal(false)} />


		</>
	);
}

export default CardCar;
