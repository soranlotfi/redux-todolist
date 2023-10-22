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
            onClick,
            ...rest
        }, ref) => {
        return <SButtonRoot
            type={type}
            ref={ref}
            onClick={onClick}
            customstats={
                {
                    bgcolor,
                    fontSize,
                    color,
                    width,
                    height,
                    padding,
                    margin,
                    ...rest
                }
            }
        >
            {children}
        </SButtonRoot>

    })

export default SButton