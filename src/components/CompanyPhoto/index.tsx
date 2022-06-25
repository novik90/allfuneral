import React from "react";
import Svg, { icons } from "../util/Svg";
import style from "./CompanyPhoto.module.scss";

const CompanyPhoto = () => {
    return (
        <div className={style.photo}>
            <div className={style.photo__section}>
                <div className={style.photo__header}>
                    <h3 className={style.photo__header__title}>
                        Приложенные фото
                    </h3>
                    <div className={style.photo__icon}>
                        <Svg id={icons.EDIT} />
                    </div>
                </div>
                <div className={style.photo__gallery}>
                    <div className={style.photo__item}>
                        <img
                            className={style.photo__image}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhddesktopwallpapers.in%2Fwp-content%2Fuploads%2F2015%2F09%2Fgoose-images.jpg&f=1&nofb=1"
                            alt="stone"
                        />
                        <div>
                            <p>Надгробный камень.jpg</p>
                            <p>11 июня 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyPhoto;
