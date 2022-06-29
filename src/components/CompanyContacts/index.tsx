import React, { FormEvent, useState } from "react";
import { ContactData, patchContacts } from "../../app/contactsSlice";
import { useAppDispatch } from "../../app/hooks";
import Button from "../util/Button";
import Input from "../util/Input";
import Svg, { icons } from "../util/Svg";

import style from "./CompanyContacts.module.scss";

interface Props {
    data: ContactData;
}

const CompanyContacts = ({ data }: Props) => {
    const fullname = `${data.lastname} ${data.firstname} ${data.patronymic}`;
    const [isEdit, setIsEdit] = useState(false);
    const [fio, setFio] = useState(fullname);
    const [phone, setPhone] = useState(data.phone);
    const [email, setEmail] = useState(data.email);

    const dispatch = useAppDispatch();

    const editHandler = () => {
        setIsEdit((prev) => !prev);
    };

    const cancelHandler = () => {
        setEmail(data.email);
        setFio(fullname);
        setPhone(data.phone);
        setIsEdit((prev) => !prev);
    };

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //проверка полей на валидность
        //проверка полей на идентичность
        const newContacts = {
            lastname: fio.split(" ")[0],
            firstname: fio.split(" ")[1],
            patronymic: fio.split(" ")[2],
            phone: phone,
            email: email,
        };
        dispatch(patchContacts(newContacts));
        setIsEdit((prev) => !prev);
    };

    const editTemplate = (
        <div className={style.contacts__form}>
            <form onSubmit={formHandler}>
                <div className={style.contacts__form__item}>
                    <p className={style.contacts__form__label}>ФИО:</p>
                    <Input
                        id="FIO"
                        label="ФИО"
                        onChange={(e) => setFio(e)}
                        value={fio}
                    />
                </div>
                <div className={style.contacts__form__item}>
                    <p className={style.contacts__form__label}>Телефон:</p>
                    <Input
                        id="phone"
                        label="Телефон"
                        onChange={(e) => setPhone(e)}
                        value={phone}
                    />
                </div>
                <div className={style.contacts__form__item}>
                    <p className={style.contacts__form__label}>Эл. почта:</p>
                    <Input
                        id="email"
                        label="Эл. почта"
                        onChange={(e) => setEmail(e)}
                        value={email}
                    />
                </div>
                <div className={style.contacts__action}>
                    <Button
                        text="Сохранить"
                        buttonClasses="button__primary__sm"
                        icon={false}
                    />
                    <Button
                        text="Отмена"
                        buttonClasses="button__warning__sm"
                        icon={false}
                        onClick={() => cancelHandler()}
                    />
                </div>
            </form>
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
                        {!isEdit && (
                            <div onClick={() => editHandler()}>
                                <Svg id={icons.EDIT} />
                            </div>
                        )}
                    </div>
                </div>
                {(!isEdit && viewTemplate) || editTemplate}
            </div>
        </section>
    );
};

export default CompanyContacts;
