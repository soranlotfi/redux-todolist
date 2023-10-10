import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";

const appBar :{
  defaultProps?: ComponentsProps['MuiAppBar'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAppBar'];
  variants?: ComponentsVariants['MuiAppBar'];
} = {
  defaultProps: {
    color: "transparent",
  },

  styleOverrides: {
    root: {
      boxShadow: "none",
    },
  },
};

export default appBar;
