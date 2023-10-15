import React, {ReactNode} from "react";
import SBox from "../../SBox/Index.tsx";
import {Grid, Typography} from "@mui/material";
import MainNavbar from "./MainNavBar";
import TodoList from "../../../Pages/TodoList";
import iconsPack, {IconsPackInterface} from "../../../Data/staticDate.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SFontAwesome} from "./styles.ts";


interface HighLayOutProps {
    children?: React.ReactNode
}

const HighLayout: React.FC<HighLayOutProps> = ({children}) => {
    return <SBox width={"100vw"} height={"100vh"}>
        <Grid container alignItems={"start"} justifyContent={"space-between"} width={"100%"} height={"100%"}>
            {/*  Navbar*/}
            <Grid item xs={12} container p={"1rem"} border={"1px solid red"}>
                <Grid item xs={8}>
                    <MainNavbar/>
                </Grid>
                <Grid item xs={4} textAlign={"end"}>
                    <Typography variant={"h1"} fontWeight={"bold"}>TodoList</Typography>
                </Grid>
            </Grid>
            {/*body*/}
            <Grid item container xs={12} border={"1px solid red"}>
                {children}
            </Grid>
            {/*    footer*/}
            <Grid item container alignSelf={"end"} bgcolor={"purple.500"} p={"1rem"} xs={12} border={" 1px solid red"}>
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
        </Grid>
    </SBox>
}

export default HighLayout