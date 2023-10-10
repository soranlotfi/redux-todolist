import colors from "../../base/colors"
import typography from "../../base/typography";
import borders from "../../base/borders";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {Theme} from "@mui/material";
import {ComponentsVariants} from "@mui/material/styles/variants";

const {info, inputBorderColor, dark} = colors;
const {size} = typography;
const {borderWidth} = borders;
const input: {
    defaultProps?: ComponentsProps['MuiInput'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiInput'];
    variants?: ComponentsVariants['MuiInput'];
} = {
    styleOverrides: {
        root: {
            fontSize: size.sm,
            color: dark.main,
            "&:hover:not(.Mui-disabled):before": {
                borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
            },

            "&:before": {
                borderColor: inputBorderColor,
            },

            "&:after": {
                borderColor: info?.main,
            },
        },
        sizeSmall: {
            fontSize: '1.2rem',
            backgroundColor: "red"
        },

    },
};

export default input;
