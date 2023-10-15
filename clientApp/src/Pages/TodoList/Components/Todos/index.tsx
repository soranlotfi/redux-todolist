import {Grid, Typography} from "@mui/material";
import React from "react";
import {useAppSelector} from "../../../../App/hooks.ts";

const Todos:React.FC =()=>{
    const Values=useAppSelector(state => state.todos)
    console.log(Values)
    return(
        <Grid item container justifyContent={"center"} alignItems={"start"} sx={{overflowY:"scroll"}}>
            <Grid item container xs={10} p={"1.5rem"} border={"1px solid blue"}>
                <Grid item container xs={8} flexDirection={"column"} rowSpacing={".8rem"}>
                    <Grid item textAlign={"start"}>
                        <Typography variant={"h2"} fontWeight={"bold"}>
                            TodoTitle
                        </Typography>
                    </Grid>
                    <Grid item textAlign={"start"}>
                        <Typography variant={"h3"}>
                            description
                        </Typography>
                    </Grid>
                    <Grid item textAlign={"start"}>
                        <Typography variant={"h4"}>
                            type
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Todos