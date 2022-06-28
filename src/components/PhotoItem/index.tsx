import React from "react";
import Svg, { icons } from "../util/Svg";
import style from "./PhotoItem.module.scss";

interface Props {
    data: {
        name: string;
        filepath: string;
        thumbpath: string;
    };
}

const PhotoItem = ({ data }: Props) => {
    return (
        <div className={style.photo__item}>
            <div className={style.photo__wrapper}>
                <img
                    className={style.photo__image}
                    src={data.thumbpath}
                    alt="stone"
                />
                <div className={style.photo__action}>
                    <Svg id={icons.CLOSE_FILLED} />
                </div>
            </div>
            <div className={style.photo__description}>
                <p className={style.photo__name}>{data.name}</p>
                <p className={style.photo__date}>11 июня 2018</p>
            </div>
        </div>
    );
};

export default PhotoItem;
