import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {Theme} from "@mui/material";

const table:{
    defaultProps?: ComponentsProps['MuiTable'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTable'];
    variants?: ComponentsVariants['MuiTable'];
}={
    styleOverrides: {
       root:{
           backgroundColor:"white",
           borderRadius:".6rem",
           textAlign:"center",
           width:"100%",
           '& thead':{
               borderBottom:"1px solid #ccc",
               padding: ".2rem",
               backgroundColor: "#f6f5f5",
               '& th':{
                   textAlign: "center"
               }
           },
           '& tbody':{
               '& td' :{
                   textAlign:"center",
                   // padding:".5rem 1rem"

               }
           }

       },
    },
}

export default table