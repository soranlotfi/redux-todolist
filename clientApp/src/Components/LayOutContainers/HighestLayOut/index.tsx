import React from "react";
import SBox from "../../SBox/Index.tsx";
import {Grid, Typography} from "@mui/material";
import MainNavbar from "./MainNavBar";
import iconsPack, {IconsPackInterface} from "../../../Data/staticDate.ts";
import {SFontAwesome} from "./styles.ts";


interface HighLayOutProps {
    children?: React.ReactNode
}

const HighLayout: React.FC<HighLayOutProps> = ({children}) => {
    return <SBox width={"100vw"} height={"100vh"} sx={{display:"flex" , flexDirection:"column" , justifyContent:"space-between"}}>
            {/*  Navbar*/}
            <Grid item  container border={"1px solid  #000"} p={"1rem"} >
                <Grid item xs={8} >
                    <MainNavbar/>
                </Grid>
                <Grid item xs={4} textAlign={"end"}>
                    <Typography variant={"h1"} fontWeight={"bold"}>TodoList</Typography>
                </Grid>
            </Grid>
            {/*body*/}
            <Grid item container xs={12}>
                {children}
            </Grid>
            {/*    footer*/}
            <Grid item container  bgcolor={"purple.500"}  >
                <Grid item xs={12} p={"1rem"} textAlign={"center"}>
                    {
                        iconsPack.filter(icon => icon.type==="socialMedia").map((icon:IconsPackInterface,index:number) =>(
                            <SFontAwesome icon={icon.icon} key={index}/>
                        ))
                    }
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="h4" color={"white.main"} fontWeight={"bold"}>Designed by Gwizman</Typography>
                </Grid>
            </Grid>
    </SBox>
}

export default HighLayout