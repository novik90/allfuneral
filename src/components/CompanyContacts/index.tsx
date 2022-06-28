import React, { useState } from "react";
import { ContactData } from "../../app/contactsSlice";
import Svg, { icons } from "../util/Svg";

import style from "./CompanyContacts.module.scss";

interface Props {
    data: ContactData;
}

const CompanyContacts = ({ data }: Props) => {
    const [isEdit, setIsEdit] = useState(false);

    const editHandler = () => {
        setIsEdit((prev) => !prev);
        console.log(isEdit);
    };

    const editTemplate = (
        <div>
            <h1>EDIT TEMPLATE</h1>
        </div>
    );

    const viewTemplate = (
        <div className={style.contacts__form}>
            <div className={style.contacts__form__item}>
                <p className={style.contacts__form__label}>ФИО:</p>
                <p className={style.contacts__form__data}>
                    {data.lastname} {data.firstname} {data.patronymic}
                </p>
            </div>
            <div className={style.contacts__form__item}>
                <p className={style.contacts__form__label}>Телефон:</p>
                <p className={style.contacts__form__data}>+{data.phone}</p>
            </div>
            <div className={style.contacts__form__item}>
                <p className={style.contacts__form__label}>Эл. почта:</p>
                <a href="/" className={style.contacts__form__data}>
                    {data.email}
                </a>
            </div>
        </div>
    );

    return (
        <section className={style.contacts}>
            <div className={style.contacts__section}>
                <div className={style.contacts__contacts}>
                    <h3 className={style.contacts__contacts__title}>
                        Контактные данные
                    </h3>
                    <div className={style.contacts__icon}>
                        <div onClick={() => editHandler()}>
                            <Svg id={icons.EDIT} />
                        </div>
                    </div>
                </div>
                {(!isEdit && viewTemplate) || editTemplate}
            </div>
        </section>
    );
};

export default CompanyContacts;
