import React from "react";

export interface IbuttonAnimate {
  _classes?: string;
  animate_arrow?: boolean;
  animate_shadow?:boolean;
  text: string;
  direction_arrow?: "up"| "down"|"left"| "right";
  disabled?:boolean;
  onClick?: (event?:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}