import React, { FormEvent, useState } from "react";
import { CompanyData, postCompanyInfo } from "../../app/companySlice";
import { useAppDispatch } from "../../app/hooks";
import Button from "../util/Button";
import Input from "../util/Input";
import Svg, { icons } from "../util/Svg";

import style from "./CompanyInfo.module.scss";

interface Props {
    data: CompanyData;
}

const CompanyInfo = ({ data }: Props) => {
    const dispatch = useAppDispatch();

    const [isEditShortName, setIsEditShortName] = useState(false);
    const [shortName, setShortName] = useState(data.shortName);

    const [isEditCompanyInfo, setIsEditCompanyInfo] = useState(false);
    const [fullCompanyName, setFullCompanyName] = useState(data.name);
    const [contractNo, setContractNo] = useState(data.contract.no);
    const [contractDate, setContractDate] = useState(data.contract.issue_date);
    const [businessEntity, setBusinessEntity] = useState(data.businessEntity);
    const [companyTypes, setCompanyTypes] = useState(data.type);

    const submitShorNameHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Проверка на корректность поля
        dispatch(postCompanyInfo({ shortName: shortName }));
        setIsEditShortName((prev) => !prev);
    };

    const editShortNameHandler = () => {
        setIsEditShortName((prev) => !prev);
    };

    const cancelShortNameHandler = () => {
        setShortName(data.shortName);
        setIsEditShortName((prev) => !prev);
    };

    const submitCompanyInfoHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Проверка на изменения (isTouched, idDirty)
        dispatch(
            postCompanyInfo({
                name: fullCompanyName,
                businessEntity: businessEntity,
                contract: {
                    no: contractNo,
                    // issue_date: new Date(contractDate),
                },
                type: companyTypes,
            })
        );
        setIsEditCompanyInfo((prev) => !prev);
    };

    const editCompanyInfo = () => {
        setIsEditCompanyInfo((prev) => !prev);
    };

    const cancelCompanyInfo = () => {
        setFullCompanyName(data.name);
        setContractNo(data.contract.no);
        setContractDate(data.contract.issue_date);
        setBusinessEntity(data.businessEntity);
        setCompanyTypes(data.type);

        setIsEditCompanyInfo((prev) => !prev);
    };

    const companyShortNameTemplate = (!isEditShortName && (
        <div className={style.company__header}>
            <h1 className={style.company__title}>{data.shortName}</h1>
            <div
                className={style.company__icon}
                onClick={() => editShortNameHandler()}
            >
                <Svg id={icons.EDIT} />
            </div>
        </div>
    )) || (
        <form onSubmit={submitShorNameHandler}>
            <div className={style.company__header}>
                <Input
                    id="shortName"
                    label="Краткое наименование"
                    value={shortName}
                    onChange={(e) => setShortName(e)}
                />
            </div>
            <div className={style.company__action}>
                <Button
                    text="Сохранить"
                    buttonClasses="button__primary__sm"
                    icon={false}
                />
                <Button
                    text="Отмена"
                    buttonClasses="button__warning__sm"
                    icon={false}
                    onClick={() => cancelShortNameHandler()}
                />
            </div>
        </form>
    );

    const companyInfoTemplate = (isEditCompanyInfo && (
        <form onSubmit={submitCompanyInfoHandler}>
            <h1>EDIT TEMPLATE</h1>
            <div className={style.company__action}>
                <Button
                    text="Сохранить"
                    buttonClasses="button__primary__sm"
                    icon={false}
                />
                <Button
                    text="Отмена"
                    buttonClasses="button__warning__sm"
                    icon={false}
                    onClick={() => cancelCompanyInfo()}
                />
            </div>
        </form>
    )) || (
        <>
            <div className={style.company__info}>
                <h3 className={style.company__info__title}>Общая информация</h3>
                <div className={style.company__icon} onClick={editCompanyInfo}>
                    <Svg id={icons.EDIT} />
                </div>
            </div>
            <div className={style.company__form}>
                <div className={style.company__form__item}>
                    <p className={style.company__form__label}>
                        Полное название:
                    </p>
                    <p className={style.company__form__data}>{data.name}</p>
                </div>
                <div className={style.company__form__item}>
                    <p className={style.company__form__label}>Договор:</p>
                    <p className={style.company__form__data}>
                        {data.contract.no} от{" "}
                        {new Date(
                            data.contract.issue_date
                        ).toLocaleDateString()}
                    </p>
                </div>
                <div className={style.company__form__item}>
                    <p className={style.company__form__label}>Форма:</p>
                    <p className={style.company__form__data}>
                        {data.businessEntity}
                    </p>
                </div>
                <div className={style.company__form__item}>
                    <p className={style.company__form__label}>Тип:</p>
                    <p className={style.company__form__data}>
                        {data.type.join(", ")}
                    </p>
                </div>
            </div>
        </>
    );

    return (
        <section className={style.company}>
            <div className={style.company__section}>
                {companyShortNameTemplate}
                {companyInfoTemplate}
            </div>
        </section>
    );
};

export default CompanyInfo;
