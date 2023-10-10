

import colors from "../../base/colors"

const { text } = colors;

const formLabel = {
  styleOverrides: {
    root: {
      color: text?.primary,
      backgroundColor:"red !important",
    },
  },
};

export default formLabel;
