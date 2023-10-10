import root from "./root";
import contained from "./contained";
import outlined from "./outlined";
import buttonText from "./text";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {Theme} from "@mui/material";
import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsVariants} from "@mui/material/styles/variants";
interface asd{
    root:any
}
const button:{
    defaultProps?: ComponentsProps['MuiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiButton']| asd;
    variants?: ComponentsVariants['MuiButton'];
} = {
    defaultProps: {
        disableRipple: false,
    },
    styleOverrides: {
        root: {...root},
        contained: {...contained.base},
        containedSizeSmall: {...contained.small},
        containedSizeLarge: {...contained.large},
        containedPrimary: {...contained.primary},
        containedSecondary: {...contained.secondary},
        outlined: {...outlined.base},
        outlinedSizeSmall: {...outlined.small},
        outlinedSizeLarge: {...outlined.large},
        outlinedPrimary: {...outlined.primary},
        outlinedSecondary: {...outlined.secondary},
        text: {...buttonText.base},
        textSizeSmall: {...buttonText.small},
        textSizeLarge: {...buttonText.large},
        textPrimary: {...buttonText.primary},
        textSecondary: {...buttonText.secondary},
    },
};

export default button;
