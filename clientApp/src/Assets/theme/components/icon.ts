
import pxToRem from "../functions/pxToRem";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";

const icon:{
  defaultProps?: ComponentsProps['MuiIcon'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiIcon'];
  variants?: ComponentsVariants['MuiIcon'];
} = {
  defaultProps: {
    baseClassName: "material-icons-round",
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

export default icon;
