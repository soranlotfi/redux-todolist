import {styled} from "@mui/system";
import Tab from "@mui/material/Tab";
import * as CSS from "csstype";



export  interface ISTab{
    color?:CSS.Property.Color | string,
    bgcolor?:CSS.Property.BackgroundColor | string,
    fontSize?:CSS.Property.FontSize | string,
    children ?: React.ReactNode,
    label?:string
}

export interface ISTabRoot{
    customstats : ISTab
}

const STabRoot = styled(Tab)<ISTabRoot>(({customstats}) => {
    const {color,bgcolor,fontSize}=customstats
    console.log(color)
    return {
        color,
        bgcolor,
        fontSize
    }
})

export default STabRoot
