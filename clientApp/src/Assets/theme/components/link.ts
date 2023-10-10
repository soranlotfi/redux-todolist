import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";


const link:{
  defaultProps?: ComponentsProps['MuiLink'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiLink'];
  variants?: ComponentsVariants['MuiLink'];
} = {
  defaultProps: {
    underline: "none",
    color: "inherit",
  },
};

export default link;
