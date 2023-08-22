/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import "./Modal.css";

import { Modal, Form, Input, Checkbox, Button, Typography, Row, Col, DatePicker, message, notification } from "antd";
import { useRequestCarMutation } from "../../redux/features/services/carsService";
import { useTranslation } from "react-i18next";

const ModalClient = ({ car, open, onClose }) => {
	const { Title, Text } = Typography;

	const [requestCar, { isLoading, isError, error, isSuccess }] =
		useRequestCarMutation();
	const { t } = useTranslation();
	const { RangePicker } = DatePicker;

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







	useEffect(() => {

		error &&
			message.error({

				content: t("error"),
			});

	}, [isError]);


	useEffect(() => {


		isSuccess &&
			openNotification();
		onClose();
	}, [isSuccess]);


	const onFinish = async (values) => {


		const formattedDates = values.periode.map(date => {
			const dateObj = new Date(date);
			const day = String(dateObj.getDate()).padStart(2, "0");
			const month = String(dateObj.getMonth() + 1).padStart(2, "0");
			const year = dateObj.getFullYear();
			return `${year}-${month}-${day}`;
		});

		try {
			await requestCar({
				carId: car.id,
				clientName: values.name,
				clientPhone: values.telephone,
				clientEmail: values.email,
				isDriver: condition.withDriver,
				isGoOutCity: condition.outCity,
				isDelivery: condition.withDelivery,
				startDate: formattedDates[0],
				endDate: formattedDates[1],
			}).unwrap();



		} catch (err) { console.log(err); }





		Modal.destroyAll();
	};



	const openNotification = () => {
		notification.success({
			message: t("demandeSuccess"),
			description:
				t("demandeDesc"),
			duration: 3,
		});
	};




	if (!open) return null;




	return (<>

		<Modal open={open} width={1200} onCancel={onClose} title={
			<Title level={3}>{t("titleModal1")}</Title>} footer>




			<Row gutter={[40]}>
				<Col span={12} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>


					<div>
						<Title level={4} style={{ marginBottom: "20px" }}>{t("resume")}</Title>
						<Row>
							<Col span={12}>
								<Text >{t("priceLocation")}</Text>

							</Col>
							<Col span={12}>
								<Title level={4}>{car.price_no_driver} CFA/{t("day")}</Title>

							</Col>
						</Row>

						{
							condition.withDriver && <Row>
								<Col span={12}>
									<Text >{t("priceLocationWithDriver")}</Text>

								</Col>
								<Col span={12}>
									<Title level={4}>{car.price_with_driver} CFA/{t("day")}</Title>

								</Col>
							</Row>
						}


						{
							condition.outCity && <Row>	<Col span={12}>
								<Text >{t("supplementOutAbidjan")}</Text>

							</Col>
								<Col span={12}>
									<Title level={4}>10000 CFA/{t("day")}</Title>

								</Col>
							</Row>
						}

						{
							condition.withDelivery && <Row>
								<Col span={12}>
									<Text >{t("fraisLivrai")}</Text>

								</Col>
								<Col span={12}>
									<Title level={4}>10000 CFA</Title>

								</Col>
							</Row>
						}



					</div>

					<Row>
						<Col span={12}>
							<Text >{t("estimationTotal")}</Text>

						</Col>


						<Col span={12}>
							<Title level={3}>

								{condition.numberOfDays === 0 ? ((condition.withDriver ? car.price_with_driver : car.price_no_driver) + (condition.outCity ? 10000 : 0)) + (condition.withDelivery ? 10000 : 0) :



									(((condition.withDriver ? car.price_with_driver : car.price_no_driver) + (condition.outCity ? 10000 : 0)) * condition.numberOfDays + 1) + (condition.withDelivery ? 10000 : 0)
								}


								CFA {t("per")} {condition.numberOfDays + 1}  {t("day")}</Title>

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

						label={t("name")}
						name="name"
						rules={[{ required: true, message: t("ruleMail") }]}
					>
						<Input size="large" />
					</Form.Item>

					<Form.Item
						label={t("mail")}
						name="email"
						rules={[{ required: true, message: t("ruleMail") }]}
					>
						<Input size="large" />
					</Form.Item>

					<Form.Item
						label={t("telephone")}
						name="telephone"
						rules={[{ required: true, message: t("rulePhone") }]}
					>
						<Input size="large" />
					</Form.Item>

					<Form.Item
						rules={[{ required: true, message: t("rulePeriode") }]}

						label={t("periode")}
						name="periode"	>

						<RangePicker onChange={(e) => calculDays(e)} />
					
					</Form.Item>



					<Row>
						<Col span={8}><Form.Item
							name="driver"
						>
							<Checkbox onChange={(first) => setCondition({ ...condition, outCity: first.target.checked })} >{t("outAbidjan")}</Checkbox>
						</Form.Item></Col>
						<Col span={8}><Form.Item
							name="outAbidjan"
						>
							<Checkbox onChange={(first) => setCondition({ ...condition, withDriver: first.target.checked })} >{t("withDriver")}</Checkbox>
						</Form.Item></Col>
						<Col span={8}><Form.Item
							name="with_delivery"
						>
							<Checkbox onChange={(first) => setCondition({ ...condition, withDelivery: first.target.checked })} >{t("delivery")}</Checkbox>
						</Form.Item></Col>

					</Row>



					<Button loading={isLoading} type="primary" size="large" htmlType="submit">
						{t("validRequest")}
					</Button>

				</Form>
				</Col>


			</Row>
		</Modal>

	</>
	);
};

export default ModalClient;