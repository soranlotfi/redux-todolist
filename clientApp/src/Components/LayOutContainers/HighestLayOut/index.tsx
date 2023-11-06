import React from "react";
import SBox from "../../SBox/Index.tsx";
import {Button, Grid, Typography} from "@mui/material";
import MainNavbar from "./MainNavBar";
import iconsPack, {IconsPackInterface} from "../../../Data/staticDate.ts";
import {SFontAwesome} from "./styles.ts";
import {useAppDispatch, useAppSelector} from "../../../App/hooks.ts";
import {setLanguage} from "../../../Features/language/setLanguageSlice.ts";


interface HighLayOutProps {
    children?: React.ReactNode
    footer?: boolean
}

const HighLayout: React.FC<HighLayOutProps> = ({children, footer = true}) => {
    const {language} = useAppSelector(state => state)
    const dispatch = useAppDispatch()
    return <SBox width={"100vw"} height={"100vh"}
                 sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        {/*  Navbar*/}
        <Grid item container border={"1px solid  #000"} p={"1rem"}>
            <Grid item xs={4}>
                <MainNavbar/>
            </Grid>
            <Grid item container alignItems={"center"} justifyContent={"center"} xs={4}>
                {
                    language.value === 'en' ? <Button variant={"contained"} size={"large"}
                                                      onClick={() => dispatch(setLanguage('fa'))}>فارسی</Button> :
                        <Button variant={"contained"} size={"large"}
                                onClick={() => dispatch(setLanguage('en'))}>انگلیسی </Button>
                }
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
        {
            footer && <Grid item container bgcolor={"purple.500"}>
                <Grid item xs={12} p={"1rem"} textAlign={"center"}>
                    {
                        iconsPack.filter(icon => icon.type === "socialMedia").map((icon: IconsPackInterface, index: number) => (
                            <SFontAwesome icon={icon.icon} key={index}/>
                        ))
                    }
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="h4" color={"white.main"} fontWeight={"bold"}>Designed by Gwizman</Typography>
                </Grid>
            </Grid>

        }
    </SBox>
}

export default HighLayout