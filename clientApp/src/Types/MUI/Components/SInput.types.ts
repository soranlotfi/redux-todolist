import * as CSS from "csstype";

export interface ISInput {
    fullWidth?: boolean;
    placeholder?: string;
    width?: CSS.Property.Width | number;
    border?: CSS.Property.Border | number;
    padding?: CSS.Property.Padding | number;
    height?: CSS.Property.Height | number;
    value?: string
}

export interface ISInputRoot {
    customstats: ISInput
}