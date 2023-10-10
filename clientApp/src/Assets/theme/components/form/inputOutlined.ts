
import colors from "../../base/colors"
import borders from "../../base/borders";
import typography from "../../base/typography";

import pxToRem from "../../functions/pxToRem";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";

const { inputBorderColor, info, grey, transparent } = colors;
const { borderRadius } = borders;
const { size } = typography;

interface input {
  notchedOutline:any
}

const inputOutlined:{
  defaultProps?: ComponentsProps['MuiOutlinedInput'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiOutlinedInput'] | input;
  variants?: ComponentsVariants['MuiOutlinedInput'];
} = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: inputBorderColor,
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: info?.main,
        },
      },
    },

    notchedOutline: {
      borderColor: inputBorderColor,
    },

    input: {
      color: grey?.[700],
      padding: pxToRem(12),
      backgroundColor: transparent.main,
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: grey?.[600],
      padding: 0,
    },
  },
};

export default inputOutlined;
