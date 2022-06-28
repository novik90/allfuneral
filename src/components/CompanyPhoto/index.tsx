import React, { ChangeEvent, useRef } from "react";
import { addPhoto, CompanyPhotos, postPhoto } from "../../app/companySlice";
import { useAppDispatch } from "../../app/hooks";
import PhotoItem from "../PhotoItem";
import Button from "../util/Button";
import Svg, { icons } from "../util/Svg";
import style from "./CompanyPhoto.module.scss";

interface Props {
    data: CompanyPhotos[];
}

const CompanyPhoto = ({ data }: Props) => {
    const dispatch = useAppDispatch();

    const inputPhotoRef = useRef<HTMLInputElement>(null!);

    const clickHandler = (): void => {
        inputPhotoRef.current.click();
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        if (file) {
            dispatch(postPhoto(file));
            dispatch(addPhoto(URL.createObjectURL(file)));
        }
    };

    return (
        <div className={style.photo}>
            <div className={style.photo__section}>
                <div className={style.photo__header}>
                    <h3 className={style.photo__header__title}>
                        Приложенные фото
                    </h3>
                </div>
                <div className={style.photo__gallery}>
                    {data.map((photo) => (
                        <PhotoItem key={photo.name} data={photo} />
                    ))}
                </div>
                <div className={style.photo__controls}>
                    <Button
                        text="Добавить фото"
                        onClick={() => clickHandler()}
                    />
                    <input
                        className={style.photo__input_file}
                        onChange={(e) => changeHandler(e)}
                        ref={inputPhotoRef}
                        accept="image/*"
                        type="file"
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanyPhoto;
