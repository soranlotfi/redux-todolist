import colors from "../../base/colors"
import borders from "../../base/borders";
import boxShadows from "../../base/boxShadows";

import pxToRem from "../../functions/pxToRem";

const { transparent } = colors;
const { borderRadius } = borders;
const stepper = {
  styleOverrides: {
    root: {
      // background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(10)}`,
      borderRadius: borderRadius.lg, 
      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
