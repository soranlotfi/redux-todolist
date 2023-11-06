import React from "react";
import {Grid, Typography} from "@mui/material";
import PageLayOut from "../../Components/LayOutContainers/PageLayOut";
import SBox from "../../Components/SBox/Index.tsx";
import Todos from "./Components/Todos";
import TodoForm from "./Components/Form";
import {useTranslation} from "react-i18next";

const TodoList: React.FC = () => {
    const {t} = useTranslation('common')
    return (
        <PageLayOut>
            <SBox width={"100%"} height={"100%"}
                  sx={{display: "flex", justifyContent: "center", alignItems: "start", padding: "2rem"}}>
                <Grid container item xs={9} height={"65vh"} border={"1px solid red"} p={".5rem"} borderRadius={".6rem"}>
                    {/*todod card and form contaier*/}
                    <Grid item container flexDirection={"row-reverse"} height={"100%"} alignItems={"stretch"}>
                        <Grid item container height={"100%"} xs={7} bgcolor={"grey.300"} p={"1rem"}>
                            <Todos/>
                        </Grid>
                        {/*todo form entery*/}
                        <Grid item container xs={5} bgcolor={"purple.500"} justifyContent={"center"} p={"2rem"}>
                            <Grid item textAlign={"center"}>
                                <Typography variant={"h1"} color={"white.main"}
                                            fontWeight={"bold"}>{t('todolistSection.formTitle')}</Typography>
                            </Grid>
                            <Grid item container>
                                <TodoForm/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </SBox>
        </PageLayOut>
    )
}

export default TodoList