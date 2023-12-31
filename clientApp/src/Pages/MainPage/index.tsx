import * as React from 'react';
import {Grid, Typography} from "@mui/material";
import PageLayOut from "../../Components/LayOutContainers/PageLayOut";
import SBox from "../../Components/SBox/Index.tsx";
import TodolistImage from "../../Assets/images/todolist.jpg"
import {useTranslation} from "react-i18next";
const HomePage: React.FC = () => {
    const {t,i18n} = useTranslation('common');
    return (
        <PageLayOut>
            <SBox width={"100%"} height={"100%"}
                  sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid item container flexDirection={"column"} spacing={"1rem"} xs={6} alignItems={"center"}>
                        <Typography  variant={"h1"} fontWeight={"bold"}> {t('mainPage.title')}</Typography>
                        <Typography variant={"h3"} fontWeight={"bold"}> {t('mainPage.caption')}</Typography>
                        <Typography variant={"h4"} fontWeight={"bold"}> {t('mainPage.designer')}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={TodolistImage} width={"100%"} height={"100%"} alt={"todolist"}/>
                    </Grid>
                </Grid>
            </SBox>
        </PageLayOut>

    )
}

export default HomePage