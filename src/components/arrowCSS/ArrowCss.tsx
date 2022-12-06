import React, {useMemo} from 'react';
import classes from "./ArrowCss.module.scss";
import { getClassesFromObj, getClassesString } from "../../helpers/getclasses";
import { IarrowCSS } from "./ArrowCss.interfaces";
export const ArrowCss = ({
    _classes = "",
    direction = "down",
    animationHover = false,
    animation = false,
    shadow  =  false,
    size   = "small",
    }:IarrowCSS ) => {
    let cl_arrow = useMemo(() => getClassesFromObj({
      general: {
          [classes.arrow] : 1,
      },
      theme: {
          [classes.arrow_theme] :1
      },
      size: {
          [classes.arrow_size_s] :  size === "small" ? 1 : 0,
          [classes.arrow_size_m] :  size ==="middle" ? 1: 0,
          [classes.arrow_size_l] :  size === "large" ? 1: 0,
      },
      border: {
          [classes.arrow_border]: 1,
      },
      shadow: {
         [classes.arrow_shadow]: shadow ? 1 : 0,
      }
    }),[shadow, size]);
    let cl_inner = useMemo(() => getClassesFromObj({
        general: {
            [classes.arrow__inner] : 1,
            [classes.arrow]: 1,
        },
        animation: {
          [classes.arrow__inner_animation_up]: ( animationHover && direction ==="up") ? 1 : 0,
          [classes.arrow__inner_animation_down] : (animationHover && direction ==="down") ? 1 : 0,
          [classes.arrow__inner_animation_left] :(animationHover && direction ==="left") ? 1 : 0,
          [classes.arrow__inner_animation_right]:(animationHover && direction ==="right") ? 1 : 0,
          [classes.arrow__inner_animation_others_down]:(animation && direction ==="down") ? 1 : 0,
          [classes.arrow__inner_animation_others_up]: (animation && direction ==="up") ? 1 : 0,
          [classes.arrow__inner_animation_others_left]:(animation && direction ==="left") ? 1 : 0,
          [classes.arrow__inner_animation_others_right]:(animation && direction ==="right") ? 1 : 0,
       }
    }),[animationHover, animation]);
    let cl_part1 = useMemo(() => getClassesFromObj({
       general: {
           [classes.arrow__part1] : 1,
       },
       theme:{
           [classes.arrow__part1_theme] : 1,
       },
       border: {
           [classes.arrow__part1_border] :1,
       },
       position: {
           [classes.arrow__part1_position]:1,
       },
       coords: {
         [classes.arrow__part1_coords_down_up] :  (direction === "down" || direction ==="up" )? 1 : 0,
         [classes.arrow__part1_coords_right_left] :(direction === "right" || direction === "left") ? 1 : 0,
       },
       transform: {

       },
       size: {
           [classes.arrow__part1_size_down_up]:   (direction === "down" || direction === "up" ) ? 1 : 0,
           [classes.arrow__part1_size_right_left]:(direction ==="right" || direction ==="left") ? 1 : 0,
       },
       shadow: {
           [classes.arrow__part1_shadow]:1,
       },
    }),[direction]);
    let cl_part2 = useMemo(() => getClassesFromObj({
       general : {
          [classes.arrow__part2] :1,
       },
       theme: {
          [classes.arrow__part2_theme] :1,
       },
       position: {
          [classes.arrow__part1_position]:1,
       },
       coord: {
          [classes.arrow__part2_coord_down] : direction === "down" ? 1 : 0,
          [classes.arrow__part2_coord_left] : direction === "left" ? 1 : 0,
          [classes.arrow__part2_coord_right] : direction === "right"? 1: 0,
          [classes.arrow__part2_coord_up] : direction === "up" ? 1: 0,
       },
       size : {
          [classes.arrow__part2_size]:1,
       },
       border: {
           [classes.arrow__part1_border] :1,
       },
       transform: {
           [classes.arrow__part2_transform_up]: direction === "up",
           [classes.arrow__part2_transform_down_left] : (direction === "down" || direction ==="left") ? 1 : 0,
           [classes.arrow__part2_transform_right_up] : direction === "right" || direction === "up" ? 1: 0,
       },
    }),[direction]);
    let cl_part3 = useMemo(() => getClassesFromObj({
        general: {
            [classes.arrow__part3] :1,
        },
        theme: {
            [classes.arrow__part3_theme] :1,
        },
        position: {
            [classes.arrow__part1_position]:1,
        },
        coord: {
            [classes.arrow__part3_coord_up] :   direction ==="up" ? 1 : 0,
            [classes.arrow__part3_coord_down] : direction === "down"? 1 :0,
            [classes.arrow__part3_coord_left] : direction === "left" ? 1 : 0,
            [classes.arrow__part3_coord_right] : direction === "right"? 1: 0,
        },
        size: {
            [classes.arrow__part3_size]:1,
        },
        border: {
            [classes.arrow__part1_border] :1,
        },
        transform: {
            [classes.arrow__part3_transform_up] : direction ==="up"? 1 : 0,
            [classes.arrow__part3_transform_down_left]: (direction === "down" || direction ==="left") ? 1 : 0,
            [classes.arrow__part3_transform_right_up]: direction === "right" || direction === "up" ? 1 :0,
        }
    }),[direction]);
    return (
        <span className = { getClassesString(cl_arrow , _classes) }>
            <span className = { getClassesString(cl_inner) }>
                <span className={ getClassesString(cl_part1) }></span>
                <span className={ getClassesString(cl_part2) }></span>
                <span className={ getClassesString(cl_part3) }></span>
            </span>
        </span>
    );
};

