import {Button} from "@mui/material";
import {styled} from "@mui/system";
import {ISButtonRoot} from "../../Types/MUI/Components/SButton.types.ts";


/*const SButtonRoot = styled(Button)<ISButtonRoot>(({customstats}) => {
    const {
        color,
        fontSize,
        width,
        height,
        textAlign,
        padding,
        margin,
    } = customstats
    return {
        color,
        fontSize,
        width,
        height,
        textAlign,
        padding,
        margin,
    }
});*/


const SButtonRoot = styled(Button)<ISButtonRoot>(({customstats}) => {
    const {
        color,
        fontSize,
        width,
        height,
        bgcolor,
        padding,
        margin,
    } = customstats
    return {
        color,
        backgroundColor:bgcolor,
        fontSize : fontSize,
        width,
        height,
        padding:padding,
        margin:margin,
    }
});


export default SButtonRoot