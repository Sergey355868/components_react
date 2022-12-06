import React, {useMemo} from 'react';
import { IarrowImgInterfaces } from "./ArrowImg.interfaces";
import classes from "./ArrowImg.module.scss";
import { getClassesFromObj, getClassesString } from "../../helpers/getclasses";

export const ArrowImg = ({
    direction ="right",
    _classes = "",
    shadow = true,
    animation = false,
    animationHover = true,
}:IarrowImgInterfaces) => {
   let cl_arrowImg = useMemo(() => getClassesFromObj({
        [classes["arrow-img"]]: 1,
        [classes["arrow-img_size"]] : 1,
        [classes["arrow-img_border"]] :1,
        [classes["arrow-img_shadow"]] : shadow ? 1 : 0,
   }),[shadow]);
   let cl_arrowImgInner = useMemo(() => getClassesFromObj({
      [classes["arrow-img__inner"]]:1,
      [classes["arrow-img"]]: 1,
      [classes["arrow-img__inner_animation_down_h"]] : animationHover && direction === "down" ? 1 :0,
      [classes["arrow-img__inner_animation_up_h"]] :   animationHover && direction === "up" ? 1 : 0,
      [classes["arrow-img__inner_animation_left_h"]] : animationHover && direction === "left" ? 1 :0,
      [classes["arrow-img__inner_animation_right_h"]] :animationHover && direction === "right" ? 1 :0,
      [classes["arrow-img__inner_animation_down"]] :   animation && direction === "down" ? 1 :0,
      [classes["arrow-img__inner_animation_up"]] :     animation && direction === "up" ? 1 : 0,
      [classes["arrow-img__inner_animation_left"]] :   animation && direction === "left" ? 1 :0,
      [classes["arrow-img__inner_animation_right"]] :  animation && direction === "right" ? 1 :0,
   }),[animation, direction,animationHover]);
   let cl_arrowImgImg = useMemo(() => getClassesFromObj({
      [classes["arrow-img__img"]] : 1,
      [classes["arrow-img"]]: 1,
      [classes["arrow-img__img_back-img_up"]]:  direction ==="up" ? 1 : 0,
      [classes["arrow-img__img_back-img_down"]]: direction ==="down" ? 1 : 0,
      [classes["arrow-img__img_back-img_right"]]: direction ==="right" ? 1 : 0,
      [classes["arrow-img__img_back-img_left"]]: direction ==="left" ? 1 : 0,
   }),[direction]);
    return (
        <span className={ getClassesString(cl_arrowImg, _classes )}>
            <span className= { getClassesString(cl_arrowImgInner) }>
                <span className={ getClassesString(cl_arrowImgImg) }></span>
            </span>
        </span>
    );
};

