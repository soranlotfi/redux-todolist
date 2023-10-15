import * as React from 'react';
import {Grid} from "@mui/material";
import PageLayOut from "../../Components/LayOutContainers/PageLayOut";
import HighestLayOut from "../../Components/LayOutContainers/HighestLayOut";


const HomePage: React.FC = () => {
    console.log("heloooooooooooo this is HomePage")
    return (
        <PageLayOut>
            <Grid item xs={12} p={"1rem"}>
                سلام بر تو
            </Grid>
        </PageLayOut>
    )
}

export default HomePage