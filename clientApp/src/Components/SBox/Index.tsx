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
        children,
        ...rest
    },ref
)=>{
    return <SBoxRoot
        width={width}
        height={height}
        ref={ref}
        sx={sx}
        customstats={{
            bgColor,
            position,
            ...rest
        }}
    >
        {children}
    </SBoxRoot>
})

export default SBox