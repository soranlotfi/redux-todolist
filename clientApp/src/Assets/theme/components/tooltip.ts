import Fade from "@mui/material/Fade";

import colors from "../base/colors"
import typography from "../base/typography";
import borders from "../base/borders";

import pxToRem from "../functions/pxToRem";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip:{
  defaultProps?: ComponentsProps['MuiTooltip'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTooltip'];
  variants?: ComponentsVariants['MuiTooltip'];
} = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(800),
      backgroundColor: black.main,
      color: light?.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: black.main,
    },
  },
};

export default tooltip;
