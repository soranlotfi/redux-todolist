import React, {ReactNode} from "react";
import SBox from "../../SBox/Index.tsx";
import FullWidthTabs from "../../../Pages/MainPage";

interface pageLayOutProps{
    children:ReactNode
}
const pageLayOut:React.FC<pageLayOutProps>=({children})=>{
    return <SBox bgColor={"red.main"} width={"100vw"} height={"100vh"}>
        <FullWidthTabs/>
        {children}
    </SBox>
}

export default pageLayOut