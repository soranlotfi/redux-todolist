import STabRoot from "./STabRoot.ts";
import {forwardRef} from "react";
import {ISTab} from "./STabRoot.ts";

const STab= forwardRef<HTMLDivElement , ISTab > ((
    {
        color,
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
        ...rest
    }}/>
})

export default STab