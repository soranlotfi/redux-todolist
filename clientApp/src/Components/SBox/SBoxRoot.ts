import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {ISboxRoot} from "../../Types/MUI/Components/SBox.types.ts";

const SBoxRoot = styled(Box)<ISboxRoot>(({customstats})=>{
    console.log(customstats)
    const{bgColor}=customstats
    return{
        backgroundColor:bgColor + "!important"
    }
})

export default SBoxRoot