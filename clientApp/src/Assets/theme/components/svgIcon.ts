import pxToRem from "../functions/pxToRem";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";

const svgIcon:{
    defaultProps?: ComponentsProps['MuiSvgIcon'];
styleOverrides?: ComponentsOverrides<Theme>['MuiSvgIcon'];
variants?: ComponentsVariants['MuiSvgIcon'];
} = {
  defaultProps: {
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default svgIcon;
