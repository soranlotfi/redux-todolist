import React from "react";
import {Grid} from "@mui/material";
import PageLayOut from "../../Components/LayOutContainers/PageLayOut";
import HighestLayOut from "../../Components/LayOutContainers/HighestLayOut";

const TodoList : React.FC = ()=>{
    console.log("Heloooooo is this todolist ??? ")
    return(
        <PageLayOut>
            <Grid item xs={12}>
                by bar hamegi
            </Grid>
        </PageLayOut>
    )
}

export default TodoList