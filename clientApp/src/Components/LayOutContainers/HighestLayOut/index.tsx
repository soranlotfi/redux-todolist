import React, {ReactNode} from "react";
import SBox from "../../SBox/Index.tsx";
import {Grid} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface pageLayOutProps{
    children:ReactNode
}
const pageLayOut:React.FC<pageLayOutProps>=({children})=>{
    return <SBox bgColor={"red.main"} width={"100vw"} height={"100vh"}>
        <AppBar position="static">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        {children}
    </SBox>
}

export default pageLayOut