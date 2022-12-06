import React, {useCallback, useEffect, useMemo, useState} from 'react';
import classes from "./ButtonAnimate.module.scss";
import { IbuttonAnimate } from "./ButtonAnimate.interfaces";
import {_reverseArray, getClassesFromObj, getClassesString, reverseArray} from "../../helpers/getclasses";
import { ArrowCss } from "../arrowCSS/ArrowCss";

export const ButtonAnimate = ({
    _classes ="",
    text = "Нажми",
    direction_arrow = "down",
    animate_shadow = false,
    animate_arrow  = false,
    disabled  = false,
    onClick = () => {},
    }:IbuttonAnimate) => {

    let [isAnimateArrow, setIsAnimateArrow] = useState(false);
    useEffect(() => {
        if (disabled && isAnimateArrow) {
            setIsAnimateArrow(false);
        }
    },[disabled]);
   // console.log(_reverseArray([1,2,3,4,5]));
   let cl_buttonAnimate = useMemo(() => getClassesFromObj({
        general: {
            [classes["button-animate"]] : 1,
        },
        theme: {
           [classes["button-animate_theme"]] : 1,
        },
        border: {
          [classes["button-animate_border"]]: 1,
        },
        shadow: {
            [classes["button-animate_shadow"]] : 1,
        },
        animation: {
           [classes["button-animate_animate"]] : animate_shadow ? 1 : 0,
        },
    }),[animate_shadow]);
    let cl_btnanPosition = useMemo(() => getClassesFromObj({
        general: {
            [classes["button-animate__position"]] :1,
        }
    }),[]);
    let enterHandler = useCallback(() => {
        if(animate_arrow) {
            setIsAnimateArrow(true);
        }
    },[animate_arrow]);
    let leaveHandler = useCallback(() => {
        if(animate_arrow) {
            setIsAnimateArrow(false);
        }
    },[animate_arrow]);

    return (
        <button
            className = { getClassesString(cl_buttonAnimate,_classes)}
            onMouseEnter = {  enterHandler }
            onMouseLeave = { leaveHandler  }
            disabled = { disabled }
            onClick = { onClick }
        >
            <span className = { getClassesString(cl_btnanPosition) }>
                <ArrowCss
                    _classes = { classes["button-animate__arrow"]}
                    size = "small"
                    direction = { direction_arrow }
                    animation={ isAnimateArrow }
                />
                { text }
            </span>
       </button>
    );
};

