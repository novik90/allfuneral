import React from "react";
import Svg, { icons } from "../util/Svg";

import style from "./CompanyContacts.module.scss";

const CompanyContacts = () => {
    return (
        <section className={style.contacts}>
            <div className={style.contacts__section}>
                <div className={style.contacts__contacts}>
                    <h3 className={style.contacts__contacts__title}>
                        Контактные данные
                    </h3>
                    <div className={style.contacts__icon}>
                        <Svg id={icons.EDIT} />
                    </div>
                </div>
                <div className={style.contacts__form}>
                    <div className={style.contacts__form__item}>
                        <p className={style.contacts__form__label}>ФИО:</p>
                        <p className={style.contacts__form__data}>
                            Григорьев Сергей Петрович
                        </p>
                    </div>
                    <div className={style.contacts__form__item}>
                        <p className={style.contacts__form__label}>Телефон:</p>
                        <p className={style.contacts__form__data}>
                            +7 (916) 216-55-88
                        </p>
                    </div>
                    <div className={style.contacts__form__item}>
                        <p className={style.contacts__form__label}>
                            Эл. почта:
                        </p>
                        <a href="/" className={style.contacts__form__data}>
                            grigoriev@funeral.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyContacts;
