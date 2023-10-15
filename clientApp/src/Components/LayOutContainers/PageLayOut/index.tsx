import React, {ReactNode} from "react";
import {Grid} from "@mui/material";
import SBox from "../../SBox/Index.tsx";

interface pageLayOutProps {
    children: ReactNode
}

const pageLayOut: React.FC<pageLayOutProps> = ({children}) => {
    return <SBox width={"100%"} height={"91%"} bgColor={"blue"} >
        {children}
    </SBox>
}

export default pageLayOut