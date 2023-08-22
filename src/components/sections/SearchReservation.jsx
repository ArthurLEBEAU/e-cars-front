import {Typography } from "antd";
import React, { useState } from "react";
import "./searchReservation.css";
import { Input } from "antd";
import CardCar from "../subcomponents/CardCar";
import { useGetRequestIdQuery } from "../../redux/features/services/carsService";
import { useTranslation } from "react-i18next";

function SearchReservation() {
    const { t } = useTranslation();
    const [id, setId] = useState(null);

    const onSearch = (value) => setId(value);

    console.log(id);

    const { data, isLoading } = useGetRequestIdQuery(id, { skip: id ? false : true });

    const { Search } = Input;

    const { Text } = Typography;

    return (
        <div className="content" >

            <Text>{t("descriptionReserVation")}</Text>

            <Search

                placeholder={t("placeHolderRe")}
                style={{ width: "50%", height: "50px" , marginTop: "20px" }}
                allowClear
                enterButton="Rechercher"
                size="large"
                loading={isLoading}
                onSearch={onSearch}
            />


            {
                id == null ? <> </> : <> {data ?
                    <div style={{ marginTop: "50px" }}><CardCar car={data.car} noRequest /> </div>
                    : <>Rien trouve</>
                } </>

            }


        </div>
    );
}

export default SearchReservation;