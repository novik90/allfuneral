import React from "react";
import { CompanyData } from "../../app/companySlice";
import Svg, { icons } from "../util/Svg";

import style from "./CompanyInfo.module.scss";

interface Props {
    data: CompanyData;
}

const CompanyInfo = ({ data }: Props) => {
    return (
        <section className={style.company}>
            <div className={style.company__section}>
                <div className={style.company__header}>
                    <h1 className={style.company__title}>{data.shortName}</h1>
                    <div className={style.company__icon}>
                        <Svg id={icons.EDIT} />
                    </div>
                </div>
                <div className={style.company__info}>
                    <h3 className={style.company__info__title}>
                        Общая информация
                    </h3>
                    <div className={style.company__icon}>
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
            </div>
        </section>
    );
};

export default CompanyInfo;
