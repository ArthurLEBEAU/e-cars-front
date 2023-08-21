/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import "./Modal.css";

import axios from "axios";
import { Modal, Form, Input, Checkbox, Button, Typography, Row, Col, DatePicker } from "antd";
import { useRequestCarMutation } from "../../redux/features/services/carsService";

const ModalClient = ({ car, open, onClose }) => {
	const { Title, Text } = Typography;

	const [requestCar, { isLoading, isError, error, isSuccess }] =
		useRequestCarMutation();

	const { RangePicker } = DatePicker;
	//  const [name, setName] = useState(""),
	//  [email, setEmail] = useState(""),
	//  [delivery_adress, setDeliveryAdress] = useState(""),
	//  [phone, setPhone] = useState(""),
	//  [driver, setDriver] = useState(false),
	//  [date, setDate] = useState(new Date()),
	//  [date1, setDate1] = useState(new Date()),
	//  STANDAR=[" Date de Départ", " Date de Retour","Choisir un modèle","Choisir un option"],
	//  [style, setStyle] = useState(car.image1);

	//  const handleSetDriver=()=>{
	// 	if(driver ==!true){
	// 		setDriver(true);
	// 	}
	// 	else setDriver(false);
	//  };

	//  /* [date, setDate] = useState(new Date()); */



	// const handleSubmit = async event => {
	// 	console.log("handleSubmit ran");
	// 	event.preventDefault(); // 👈️ prevent page refresh

	// 	// 👇️ access input values here
	// 	console.log("firstName 👉️", name);
	// 	console.log("lastName 👉️", email);
	// 	 axios({
	// 		method: "POST",
	// 		url: "http://localhost:3001/client",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		data: {
	// 			phone:phone,
	// 			name: name,
	// 			email: email



	// 		}
	// 	}).then(function(response1) {

	// 		console.log(response1.data);

	// 		axios({
	// 			method: "POST",
	// 			url: "http://localhost:3001/request",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			data: {
	// 				client: response1.data.id,
	// 				state: "NOUVEAU",
	// 				car: car.id,
	// 				driver_w: driver,
	// 				delivery: false,
	// 				delivery_adress: "Retrait Rieviera 4",
	// 				final_price: driver? car.driver: car.price,

	// 			}
	// 		}).then(function(response) {

	// 			console.log(response.data);
	// 			(window.confirm("DEMANDE ENVOYÉE AVEC SUCCES"));
	// 			onClose(true);
	// 			return 1;

	// 		}).catch(function(error) {

	// 			onClose(true);
	// 			(window.confirm("ECHECS DE LA DEMANDE"));


	// 			return 0;
	// 		});


	// 	})
	// 		.catch(function(error) {

	// 			onClose(true);
	// 			(window.confirm("ECHECS DE LA DEMANDE"));


	// 			return 0;
	// 		});


	// 	// 👇️ clear all input values in the form

	// 	setName("");
	// 	setEmail("");
	// };


	const [condition, setCondition] = useState({
		numberOfDays: 0,
		withDriver: false,
		outCity: false,
		withDelivery: false,
	});


	const calculDays = (values) => {

		var differenceEnMillisecondes = values[1] - values[0];

		var differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

		setCondition({ ...condition, numberOfDays: differenceEnJours });
	};


	const onFinish = async (values) => {
		console.log("Success:", values);

		const formattedDates = values.periode.map(date => {
			const dateObj = new Date(date);
			const day = String(dateObj.getDate()).padStart(2, "0");
			const month = String(dateObj.getMonth() + 1).padStart(2, "0");
			const year = dateObj.getFullYear();
			return `${day}/${month}/${year}`;
		});

		try {
			await requestCar({
				carId: car.id,
				clientName:values.name,
				clientPhone: values.telephone,
				clientEmail: values.email,
				isDriver: condition.withDriver,
				isGoOutCity: condition.outCity,
				isDelivery: condition.withDelivery,
				startDate: formattedDates[0],
				endDate: formattedDates[1],
			}).unwrap();

			onClose();

		} catch (err) { console.log(err); }





		Modal.destroyAll();
	};

	if (!open) return null;


	return (<>
		{/* <div onClick={onClose} className='overlay'>
			<div
				onClick={onClose}
				className='modalContainer'
          
			> 
				<div  onClick={(e) => {
					e.stopPropagation();
				}} className='vraiModal' >
					<div className='modelLeft'>
						<img className='imageSelected' src={style} alt='logo'/>
           
					</div>
					<div className='modalRight'>
						<p className='closeBtn' onClick={onClose}>
               				Retour 
						</p>
						<div>
							<form className='requestForm' onSubmit={handleSubmit}>
								<div className='champ' >
									<div className='label'>
            						Nom complet:
									</div>
           
									<input
										id="name"
										name="name"
										type="text"
										onChange={event => setName(event.target.value)}
										value={name}
									/>
            
								</ div>

								<div className='champ' >
									<div className='label'>
            						Email:
									</div>
									<input
										id="email"
										name="email"
										type="text"
										value={email}
										onChange={event => setEmail(event.target.value)}
									/>
            
								</ div>
								<div className='champ' >
									<div className='label'>
            						Telephone:
									</div>
									<input
										id="phone"
										name="phone"
										type="text"
										value={phone}
										onChange={event => setPhone(event.target.value)}
									/>
            
								</ div>

								<div className='champ' >
									<div className='label'>
            						 Avec chauffeur? :
									</div>
           
									<input
										type ="checkbox" value ={driver} onChange={()=>handleSetDriver()}
									/>
            
								</ div>

			
        
								<div className='demande' onClick={handleSubmit} type="submit">DEMANDER</div>
							</form>
						</div>
					</div>
         
				</div>
        
			</div>
      		Modal
		</div> */}


		<Modal open={open} width={1200} onCancel={onClose} title={
			<Title level={3}>Effectuer la demande</Title>} footer>

			<Row gutter={[40]}>
				<Col span={12} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>


					<div>
						<Title level={4} style={{ marginBottom: "20px" }}>Resumé</Title>
						<Row>
							<Col span={12}>
								<Text >Prix de location de la voiture:</Text>

							</Col>
							<Col span={12}>
								<Title level={4}>{car.price_no_driver} CFA/Jour</Title>

							</Col>
						</Row>

						{
							condition.withDriver && <Row>
								<Col span={12}>
									<Text >Prix de location de la voiture avec chauffeur:</Text>

								</Col>
								<Col span={12}>
									<Title level={4}>{car.price_with_driver} CFA/Jour</Title>

								</Col>
							</Row>
						}


						{
							condition.outCity && <Row>	<Col span={12}>
								<Text >Supplement pour les locations hors d'abidjan:</Text>

							</Col>
								<Col span={12}>
									<Title level={4}>10000 CFA/Jour</Title>

								</Col>
							</Row>
						}

						{
							condition.withDelivery && <Row>
								<Col span={12}>
									<Text >Frais de livraison:</Text>

								</Col>
								<Col span={12}>
									<Title level={4}>10000 CFA</Title>

								</Col>
							</Row>
						}



					</div>

					<Row>
						<Col span={12}>
							<Text >Estimation totale de la demande:</Text>

						</Col>


						<Col span={12}>
							<Title level={3}>

								{condition.numberOfDays === 0 ? ((condition.withDriver ? car.price_with_driver : car.price_no_driver) + (condition.outCity ? 10000 : 0)) + (condition.withDelivery ? 10000 : 0) :



									(((condition.withDriver ? car.price_with_driver : car.price_no_driver) + (condition.outCity ? 10000 : 0)) * condition.numberOfDays + 1) + (condition.withDelivery ? 10000 : 0)
								}


								CFA pour {condition.numberOfDays + 1}  jour</Title>

						</Col>
					</Row>


				</Col>


				<Col span={12}><Form

					style={{ marginTop: "30px" }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					layout="vertical"
					// onFinishFailed={onFinishFailed}
					autoComplete="on"
				>



					<Form.Item

						label="Nom & prénoms / Nom de l'entreprise:"
						name="name"
						rules={[{ required: true, message: "Veuillez entrez votre nom complet" }]}
					>
						<Input size="large" />
					</Form.Item>

					<Form.Item
						label="Email:"
						name="email"
						rules={[{ required: true, message: "Veuillez entrez votre email" }]}
					>
						<Input size="large" />
					</Form.Item>

					<Form.Item
						label="Numero de telephone:"
						name="telephone"
						rules={[{ required: true, message: "Veuillez entrez votre numero de telephone" }]}
					>
						<Input size="large" />
					</Form.Item>

					<Form.Item
rules={[{ required: true, message: "Veuillez entrez votre periode de location" }]}
			
						label={"Periode de location"}
						name="periode"	>

						<RangePicker onChange={(e) => calculDays(e)} />
						{/* <div className='dateChoice'>


		<DatePicker date={date} setDate={setDate} STANDAR={STANDAR[0]}  ></DatePicker>
		<DatePicker date={date1} setDate={setDate1} STANDAR={STANDAR[1]} ></DatePicker>
	</div> */}
					</Form.Item>



					<Row>
						<Col span={8}><Form.Item
							name="driver"
						>
							<Checkbox onChange={(first) => setCondition({ ...condition, outCity: first.target.checked })} >Hors d'abidjan</Checkbox>
						</Form.Item></Col>
						<Col span={8}><Form.Item
							name="outAbidjan"
						>
							<Checkbox onChange={(first) => setCondition({ ...condition, withDriver: first.target.checked })} >Avec chauffeur</Checkbox>
						</Form.Item></Col>
						<Col span={8}><Form.Item
							name="with_delivery"
						>
							<Checkbox onChange={(first) => setCondition({ ...condition, withDelivery: first.target.checked })} >A livrer ?</Checkbox>
						</Form.Item></Col>

					</Row>



					<Button type="primary" size="large" htmlType="submit">
						Valider la demande
					</Button>

				</Form>
				</Col>


			</Row>
		</Modal>

	</>
	);
};

export default ModalClient;