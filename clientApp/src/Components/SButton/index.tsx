import React, {forwardRef} from "react";
import SButtonRoot from "./SButtonRoot.ts";
import {ISButton} from "../../Types/MUI/Components/SButton.types.ts";



const SButton = forwardRef<HTMLButtonElement, ISButton>(
    (
        {
            type,
            children,
            color,
            bgcolor,
            fontSize,
            width,
            height,
            padding,
            margin,
        }, ref) => {
        return <SButtonRoot
            type={type}
            ref={ref}
            customstats={
                {
                    bgcolor,
                    fontSize,
                    bgcolor,
                    color,
                    width,
                    height,
                    padding,
                    margin,
                }
            }
        >
            {children}
        </SButtonRoot>

    })

export default SButton