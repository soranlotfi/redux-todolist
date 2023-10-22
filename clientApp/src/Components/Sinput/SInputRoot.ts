import {styled} from "@mui/system";
import {TextField, useTheme} from "@mui/material";
import {ISInputRoot} from "../../Types/MUI/Components/SInput.types.ts";

const SInputRoot = styled(TextField)<ISInputRoot>(({customstats}) => {
    const {
        width,
        border,
        padding,
        height
    } = customstats
    const theme =useTheme()
    return ({
        '& .MuiFormHelperText-root': {
            color: theme.palette.error.light + "!important",
            fontSize: ".8rem",
            fontWeight: "bold",
            padding: "0.1rem 0 !important"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: 0,

        },
        "& .MuiInputBase-root": {
            backgroundColor:"#fff",
            border: 0,
            fontSize: "1rem",
            fontWeight: "bold"
        },
        "& .MuiInputLabel-root": {
            fontSize: "1rem",
            fontWeight: "bold !important",
            background: theme.palette.white.main + "!important",
            borderRadius: "10px !important",
            color: theme.palette.secondary.main + "!important",
            padding: "0 10px !important"
        },
        width,
        border,
        padding,
        height,
    })
});
export default SInputRoot;
