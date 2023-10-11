import {SxProps} from "@mui/material";
import * as CSS from "csstype";

export interface ISBox {
    bgColor?: CSS.Property.BackgroundColor
    sx?: SxProps
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number
    position?: CSS.Property.Position
    children?: React.ReactNode
}

export interface ISboxRoot {
    customstats: ISBox
}