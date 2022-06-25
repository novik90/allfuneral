import React from "react";
import Svg, { icons } from "../util/Svg";

import style from "./CompanyInfo.module.scss";

const CompanyInfo = () => {
    return (
        <section className={style.company}>
            <div className={style.company__section}>
                <div className={style.company__header}>
                    <h1 className={style.company__title}>
                        Перспективные захоронения
                    </h1>
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
                        <p className={style.company__form__data}>
                            ООО Фирма "Перспективные захоронения"
                        </p>
                    </div>
                    <div className={style.company__form__item}>
                        <p className={style.company__form__label}>Договор:</p>
                        <p className={style.company__form__data}>
                            12345 от 12.03.2015
                        </p>
                    </div>
                    <div className={style.company__form__item}>
                        <p className={style.company__form__label}>Форма:</p>
                        <p className={style.company__form__data}>ООО</p>
                    </div>
                    <div className={style.company__form__item}>
                        <p className={style.company__form__label}>Тип:</p>
                        <p className={style.company__form__data}>
                            Агент, Подрядчик
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
