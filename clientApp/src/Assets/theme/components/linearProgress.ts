import borders from "../base/borders";
import colors from "../base/colors"

import pxToRem from "../functions/pxToRem";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";

const {borderRadius} = borders;
const {light} = colors;

const linearProgress: {
    defaultProps?: ComponentsProps['MuiLinearProgress'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiLinearProgress'];
    variants?: ComponentsVariants['MuiLinearProgress'];
} = {
    styleOverrides: {
        root: {
            height: pxToRem(6),
            borderRadius: borderRadius.md,
            overflow: "visible",
            position: "relative",
        },

        colorPrimary: {
            backgroundColor: light?.main,
        },

        colorSecondary: {
            backgroundColor: light?.main,
        },

        bar: {
            height: pxToRem(6),
            borderRadius: borderRadius.sm,
            position: "absolute",
            transform: `translate(0, 0) !important`,
            transition: "width 0.6s ease !important",
        },
    },
};

export default linearProgress;
