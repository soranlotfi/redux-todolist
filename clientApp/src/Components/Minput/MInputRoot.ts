import {styled} from "@mui/system";
import {TextField} from "@mui/material";
import {ISInput} from "../../Types/MUI/Components/SInput.types.ts";



interface ISInputRoot {
    customstats: ISInput
}


const MInputRoot = styled(TextField)<ISInputRoot>(({customstats}) => {
    const {
        width,
        border,
        padding,
        height
    } = customstats
    return {
        width,
        border,
        padding,
        height,
    }
});
export default MInputRoot;
