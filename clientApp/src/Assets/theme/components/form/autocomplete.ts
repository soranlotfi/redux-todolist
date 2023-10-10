
import typography from "../../base/typography"
import boxShodows from "../../base/boxShadows";
import colors from "../../base/colors";
import borders from "../../base/borders";
import pxToRem from "../../functions/pxToRem";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";
const { lg } = boxShodows;
const { size } = typography;
const { text, white, transparent, light, black, gradients } = colors;
const { borderRadius } = borders;

interface AutoCom{
  tag:any
}


const autocomplete:{
  defaultProps?: ComponentsProps['MuiAutocomplete'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAutocomplete'] | AutoCom;
  variants?: ComponentsVariants['MuiAutocomplete'];
} = {
  styleOverrides: {
    popper: {
      boxShadow: lg,
      padding: pxToRem(8),
      fontSize: size.sm,
      color: text?.primary,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: "none",
      backgroundColor: transparent?.main,
    },

    option: {
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text?.primary,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light?.main,
        color: black.dark,
      },

      '&[aria-selected="true"]': {
        backgroundColor: `${light?.main} !important`,
        color: `${black.dark} !important`,
      },
    },

    noOptions: {
      fontSize: size.sm,
      color: text?.primary,
    },

    groupLabel: {
      color: black.dark,
    },

    loading: {
      fontSize: size.sm,
      color: text?.primary,
    },

    tag: {
      display: "flex",
      alignItems: "center",
      height: "auto",
      padding: pxToRem(4),
      backgroundColor: gradients.dark,
      color: white.main,

      "& .MuiChip-label": {
        lineHeight: 1.2,
        padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
      },

      "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
        color: white.main,
        marginRight: 0,
      },
    },
  },
};

export default autocomplete;
