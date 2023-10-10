
import colors from "../../base/colors"
import typography from "../../base/typography";

import pxToRem from "../../functions/pxToRem";


const { dark } = colors;
const { size, fontWeightBold } = typography;

const formControlLabel = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
      fontSize: "1rem",
      fontWeight: "bold",
    },

    label: {
      display: "inline-block",
      fontSize: "1.1rem !important",
      fontWeight: "bold",
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      "&.Mui-disabled": {
        color: dark.main,
      },
    },
  },
};

export default formControlLabel;
