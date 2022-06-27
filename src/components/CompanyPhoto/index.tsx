import React from "react";
import Button from "../util/Button";
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
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                    <div className={style.photo__item}>
                        <div className={style.photo__wrapper}>
                            <img
                                className={style.photo__image}
                                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgravestone%2Fgravestone_PNG85.png&f=1&nofb=1"
                                alt="stone"
                            />
                            <div className={style.photo__action}>
                                <Svg id={icons.CLOSE_FILLED} />
                            </div>
                        </div>
                        <div className={style.photo__description}>
                            <p className={style.photo__name}>
                                Надгробный камень.jpg
                            </p>
                            <p className={style.photo__date}>11 июня 2018</p>
                        </div>
                    </div>
                </div>
                <div className="photo__controls">
                    <Button text="Добавить изображение" />
                </div>
            </div>
        </div>
    );
};

export default CompanyPhoto;
