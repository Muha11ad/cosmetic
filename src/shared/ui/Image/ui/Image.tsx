import React, { FC } from "react";
import cls from "./Image.module.scss";
import notFoundImage from "@/app/assets/imageNotFound.png";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
export const Image: FC<ImageProps> = (props) => {
  function getImageUrl(url: string) {
    if (url) {
      return url;
    }
    return notFoundImage;
  }
  return (
    <img
      alt={props.alt}
      src={getImageUrl(props.src) as string}
      className={[cls.Image, props.className].join(" ")}
    />
  );
};
