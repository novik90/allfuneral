import React from "react";
import Svg from "../util/Svg";
import style from "./ProcessManager.module.scss";

const ProcessManager = () => {
    return (
        <div className={style.manager}>
            <div className={style.manager__header}>
                <h2 className={style.manager__title}>Честный Агент</h2>
                <p className={style.manager__description}>Менеджер процесса</p>
            </div>
            <div className={style.manager__items}>
                <ul className={style.manager__list}>
                    <li className={style.manager__item}>
                        <a
                            href="/"
                            className={`${style.manager__link} ${style.manager__link__active}`}
                        >
                            <div className={style.manager__icon}>
                                <Svg id="building" />
                            </div>
                            <p className={style.manager__link_text}>
                                Организации
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProcessManager;
