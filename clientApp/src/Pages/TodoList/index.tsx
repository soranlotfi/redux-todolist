import React from "react";
import {Grid, Typography} from "@mui/material";
import PageLayOut from "../../Components/LayOutContainers/PageLayOut";
import SBox from "../../Components/SBox/Index.tsx";
import Todos from "./Components/Todos";
import TodoForm from "./Components/Form";

const TodoList: React.FC = () => {
    console.log("Heloooooo is this todolist ??? ")
    return (
        <PageLayOut>
            <SBox width={"100%"} height={"100%"}
                  sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem"}}>
                <Grid container item xs={9} border={"1px solid red"} p={".5rem"} borderRadius={".6rem"}>
                    {/*todod card and form contaier*/}
                    <Grid item container>
                        <Grid item container xs={8} bgcolor={"grey.300"} p={"1rem 0"}>
                            <Todos/>
                        </Grid>
                        {/*todo form entery*/}

                        <Grid item container xs={4} bgcolor={"purple.500"} justifyContent={"center"} p={"2rem"}>
                            <Grid item textAlign={"center"}>
                                <Typography variant={"h1"} color={"white.main"} fontWeight={"bold"}>Add Todo</Typography>
                            </Grid>
                            <TodoForm/>
                        </Grid>
                    </Grid>
                </Grid>
            </SBox>
        </PageLayOut>
    )
}

export default TodoList