import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {ISboxRoot} from "../../Types/MUI/Components/SBox.types.ts";

const SBoxRoot = styled(Box)<ISboxRoot>(({customstats})=>{
    const{bgColor}=customstats
    console.log(bgColor)
    return{

    }
})

export default SBoxRoot