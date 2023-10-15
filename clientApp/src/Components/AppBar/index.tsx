import STabRoot from "./STabRoot.ts";
import {forwardRef} from "react";
import {ISTab} from "./STabRoot.ts";

const STab= forwardRef<HTMLDivElement , ISTab > ((
    {
        color,
        Amat,
        bgcolor,
        fontSize,
        label,
        ...rest
    }, ref) => {
    return <STabRoot
    ref={ref}
    label={label}
    customstats={{
        color,
        bgcolor,
        fontSize,
        Amat,
        ...rest
    }}/>
})

export default STab