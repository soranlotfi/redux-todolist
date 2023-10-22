import React from "react";

export interface ISButton {
    type?: "button" | "submit" | "reset",
    color?: string,
    bgcolor?: string,
    fontSize?: string,
    width?: string,
    height?: string,
    textAlign?: string,
    padding?: string,
    margin?: string,
    children?: React.ReactNode,
    onClick?:React.MouseEventHandler<HTMLButtonElement>

}

export interface ISButtonRoot{
    customstats:ISButton
}