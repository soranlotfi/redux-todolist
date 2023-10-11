import {forwardRef} from "react";
import {ISBox} from "../../Types/MUI/Components/SBox.types.ts";
import SBoxRoot from "./SBoxRoot.ts";

const SBox = forwardRef<HTMLDivElement,ISBox>((
    {
        width,
        height,
        position,
        sx,
        bgColor,
        children
    },ref
)=>{
    return <SBoxRoot
        width={width}
        height={height}
        backgroundColor={bgColor}
        ref={ref}
        sx={sx}
        customstats={{
            bgColor,
            position
        }}
    >
        {children}
    </SBoxRoot>
})

export default SBox