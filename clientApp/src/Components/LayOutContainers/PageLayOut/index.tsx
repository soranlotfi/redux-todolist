import React, {ReactNode} from "react";

interface pageLayOutProps{
    children:ReactNode
}
const pageLayOut:React.FC<pageLayOutProps>=({children})=>{
    return <div className={"main-page-container"}>
        {children}
    </div>
}

export default pageLayOut