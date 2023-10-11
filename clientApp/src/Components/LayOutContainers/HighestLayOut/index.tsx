import React, {ReactNode} from "react";
import SBox from "../../SBox/Index.tsx";
import {Grid} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface pageLayOutProps{
    children:ReactNode
}
const HighLayout:React.FC<pageLayOutProps>=({children})=>{
    return <SBox bgColor={"red.main"} width={"100vw"} height={"100vh"}>
        {children}
    </SBox>
}

export default HighLayout