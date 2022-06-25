import React from "react";
import { NavLink } from "react-router-dom";
import Svg, { icons } from "../util/Svg";
import style from "./Menu.module.scss";

function Menu() {
    const activeLink = ({ isActive }: any) =>
        isActive
            ? `${style.sidebar__link} ${style.sidebar__link__active}`
            : style.sidebar__link;

    return (
        <div className={style.menu}>
            <div className={`${style.menu__section} ${style.sidebar}`}>
                <div className={style.sidebar__item}>
                    <NavLink to={"/home"} className={activeLink}>
                        <Svg id={icons.HOME} />
                    </NavLink>
                </div>
                <div className={style.sidebar__item}>
                    <NavLink to={"/"} className={activeLink}>
                        <Svg id={icons.MARKET} />
                    </NavLink>
                </div>
                <div className={style.sidebar__item}>
                    <NavLink to={"/search"} className={activeLink}>
                        <Svg id={icons.SEARCH} />
                    </NavLink>
                </div>
            </div>
            <div className={`${style.menu__section} ${style.sidebar}`}>
                <div className={style.sidebar__item}>
                    <NavLink to={"/settings"} className={activeLink}>
                        <Svg id={icons.SETTINGS} />
                    </NavLink>
                </div>
                <div className={style.sidebar__item}>
                    <NavLink to={"/chat"} className={activeLink}>
                        <Svg id={icons.CHAT} />
                    </NavLink>
                </div>
                <div className={style.sidebar__item}>
                    <NavLink to={"/exit"} className={activeLink}>
                        <Svg id={icons.EXIT} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Menu;
