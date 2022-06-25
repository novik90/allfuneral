import React from "react";
import Svg, { icons } from "../util/Svg";

import style from "./ContentHeader.module.scss";

const ContentHeader = () => {
    return (
        <section className={style.header}>
            <div className={style.header__title}>
                <div className={style.header__icon}>
                    <Svg id={icons.ARROW_LEFT} />
                </div>
                <p className={style.header__text}>К списку юридических лиц</p>
            </div>
            <div className={style.header__icons}>
                <div className={style.header__icon}>
                    <Svg id={icons.LINKED} />
                </div>
                <div className={style.header__icon}>
                    <Svg id={icons.ARROW_ROUNDED} />
                </div>
                <div className={style.header__icon}>
                    <Svg id={icons.TRASH} />
                </div>
            </div>
        </section>
    );
};

export default ContentHeader;
