import {styled} from "@mui/system";
import {TextField} from "@mui/material";
import {ISInputRoot} from "../../Types/MUI/Components/SInput.types.ts";

const SInputRoot = styled(TextField)<ISInputRoot>(({customstats}) => {
    const {
        width,
        border,
        padding,
        height
    } = customstats
    console.log(customstats)
    return {
        width,
        border,
        padding,
        height,
    }
});
export default SInputRoot;
