import {styled} from "@mui/system";
import Tab from "@mui/material/Tab";
import * as CSS from "csstype";


export interface ISTab {
    color?: CSS.Property.Color | string,
    bgcolor?: CSS.Property.BackgroundColor | string,
    fontSize?: CSS.Property.FontSize | string,
    children?: React.ReactNode,
    label?: string
    Amat?:boolean
}

export interface ISTabRoot {
    customstats: ISTab
}

const STabRoot = styled(Tab)<ISTabRoot>(({customstats}) => {
    const {color, bgcolor, fontSize,Amat} = customstats
    function AmatStyle() {
        return {
            '& .MuiTab-root': {
                background: "#000!important",
                fontSize:"10rem !important"
            },
            '.MuiTab-textColorPrimary' : {
                color:"red",
            }
        }
    }

    return {
        color,
        bgcolor,
       ...(AmatStyle())
    }
})

export default STabRoot
