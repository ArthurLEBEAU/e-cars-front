import React, { useState } from "react";
import "./Modal.css";
import ModalClient from "./ModalClient";
import { Modal, Carousel, Button, Image } from "antd";
import { useTranslation } from "react-i18next";
function ModalCar({ marqModel, car, open, onClose, noRequest }) {
	const [openModal1, setOpenModal1] = useState(false);


	const { t } = useTranslation();


	if (!open) return null;


	return (
		<>
			<Modal open={open} width={1000} className="modal_no_padding" onCancel={onClose} footer>
				<div className="modal_content">
					<div className="modal-left" style={{ width: "500px" }}>
						<Carousel style={{ width: "100%" }} autoplay  >
							<Image
								width={500} height={500}
								src={car.image1}
							/>  <Image
								width={500} height={500}
								src={car.image2}
							/>  <Image
								width={500} height={500}
								src={car.image3}
							/>  <Image
								width={500} height={500}
								src={car.image4}
							/>
						</Carousel>
					</div>

					<div className='modalRight'>

						<div className='contentModal'>
							<div className='marq_modal'> {marqModel}</div>

							<ul className='caracterisq_modal'>
								<li>{car.year} </li>
								<li> |</li>
								<li>{car.mileage} KM </li>
								<li> |</li>
								<li>{car.motor} </li>
								<li> |</li>
								<li>{car.box} </li>
							</ul>

							<div className="price_zone">
								<div className="zone1">
									<div className='apa_modal'> {t("toLeave")}</div>
									{car.price_no_driver ? (<div className='prix_modal'>{car.price_no_driver} CFA/{t("day")} </div>) : (
										<div className='prix_modal'> {t("unavailable")}  </div>
									)}
								</div>

								<div className="zone1">
									<div className='apa_modal'> {t("withChauffeur")}</div>
									{car.price_with_driver ? (<div className='prix_modal'>{car.price_with_driver} CFA/{t("day")} </div>) : (
										<div className='prix_modal'>  {t("unavailable")}  </div>
									)}

								</div>
							</div>

							{
								noRequest ? <></> : <Button type="primary" style={{ marginTop: "20px" }} size="large" onClick={() => setOpenModal1(true)}>{t("request")}</Button>

							}






						</div>

					</div>

				</div>
			</Modal>



			<ModalClient car={car}
				open={openModal1}
				onClose={() => setOpenModal1(false)} />

		</>


	);
}

export default ModalCar;



{/* <div onClick={onClose} className='overlay'>
		 	<div 
		// 		onClick={onClose}
		// 		className='modalContainer'
          
		// 	> 
		// 		<div  onClick={(e) => {
		// 			e.stopPropagation();
		// 		}} className='vraiModal' >
		// 			<div className='modelLeft'>
		// 				<img className='imageSelected' src={style} alt='logo'/>
		// 				<div className='floatiin_div_modal'>
		// 					<div >
		// 						<img onClick={()=>setStyle(car.image1)} src={car.image1} alt='logo' />
		// 						<img onClick={()=>setStyle(car.image2)}  src={car.image2} alt='logo' />
		// 						<img onClick={()=>setStyle(car.image3)} src={car.image3} alt='logo' />
		// 						<img onClick={()=>setStyle(car.image4)} src={car.image4} alt='logo' />
		// 					</div>
							
              
              
		// 				</div>
		// 			</div>
		// 			<div className='modalRight'>
		// 				<p className='closeBtn' onClick={onClose}>
        //        				X
		// 				</p>
		// 				<div className='content'>
		// 					<div className='marq_modal'> {marqModel}</div>
              
		// 					<ul className='caracterisq_modal'>
		// 						<li>{car.year} </li>
		// 						<li> |</li>
		// 						<li>{car.mileage} KM </li>
		// 						<li> |</li> 
		// 						<li>{car.motor} </li>
		// 						<li> |</li>
		// 						<li>{car.box} </li> 
		// 					</ul> 
							
		// 					<div className="price_zone">
		// 						<div className="zone1">
		// 						<div className='apa_modal'> À partir de</div>
		// 						{car.price? (<div className='prix_modal'>{car.price} CFA/Jour </div>):(
		// 							<div className='prix_modal'> Indisponible  </div>
		// 						)}
		// 						</div>
							
		// 						<div className="zone1">
		// 						<div className='apa_modal'> Avec chauffeur</div>
		// 						{car.driver? (<div className='prix_modal'>{car.driver} CFA/Jour </div>):(
		// 							<div className='prix_modal'> Indisponible  </div>
		// 						)}
							
		// 						</div>
		// 					</div>


							
					
            
		// 				</div>
		// 				<div className='btnContainer'>

	
             
			 
		// 					<button onClick={()=>setOpenModal1(true)} className='btnPrimary'>
        //        					DEMANDER
		// 					</button>
              
           
           
           
		// 				</div>
          
		// 			</div>
		// 		</div>

        
        
           
		// 	</div>
		// 	<ModalClient car={car}
		// 		open={openModal1} 
		// 		onClose={() => setOpenModal1(false)} />
     	// 		Modal
								// </div> */}