
import colors from "../base/colors"
import borders from "../base/borders";

import pxToRem from "../functions/pxToRem";

const { white } = colors;
const { borderRadius } = borders;

const sidenav:sideNaveOptions = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: white.main,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export interface sideNaveOptions{
  styleOverrides : {
    root: {
      width: string,
      whiteSpace: string,
      border: string,
    },


    paper:{
      width:string,
      backgroundColor:string,
      height:string,
      margin:string,
      borderRadius:string,
      border:string
    }

    paperAnchorDockedLeft: {
      borderRight:string,
    },

  }
}

export default sidenav;
