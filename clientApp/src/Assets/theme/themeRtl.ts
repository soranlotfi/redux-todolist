import {createTheme} from '@mui/material';
import colors from "./base/colors";
import button from "./components/button";
import input from "./components/form/input";
import inputLabel from "./components/form/inputLabel";
import inputOutlined from "./components/form/inputOutlined";
import textField from "./components/form/textField";
import autocomplete from "./components/form/autocomplete";
import checkbox from "./components/form/checkbox";
import formControlLabel from "./components/form/formControlLabel";
import formLabel from "./components/form/formLabel";
import radio from "./components/form/radio";
import select from "./components/form/select"
import switchButton from "./components/form/switchButton";
import list from "./components/list";
import listItem from "./components/list/listItem";
import listItemText from "./components/list/listItemText";
import appBar from "./components/appBar";
import avatar from "./components/avatar";
import breadcrumbs from "./components/breadcrumbs";
import buttonBase from "./components/buttonBase";
import container from "./components/container";
import dialog from "./components/dialog";
import icon from "./components/icon";
import iconButton from "./components/iconButton";
import inputBase from "./components/inputBase";
import linearProgress from "./components/linearProgress";
import link from "./components/link";
import popover from "./components/popover";
import slider from "./components/slider";
import svgIcon from "./components/svgIcon";
import table from "./components/table";
import tooltip from "./components/tooltip";
import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import BoxShadow from "./functions/boxShadow";
import gradientChartLine from "./functions/gradientChartLine";
import hexToRgb from "./functions/hexToRgb";
import linearGradient from "./functions/linearGradient";
import rgba from "./functions/rgba";
import typography from "./base/typographyRtl";
import pxToRem from "./functions/pxToRem";


const themeRtl= createTheme({
    direction: "rtl",
    palette: {...colors},
    border: {...borders},
    boxShadow: {...boxShadows},
    typography: {...typography},
    functions: {
        BoxShadow,
        gradientChartLine,
        hexToRgb,
        linearGradient,
        rgba,
        pxToRem
    },
    components: {
        MuiButton: {...button},
        MuiInput: {...input},
        MuiInputLabel: {...inputLabel},
        MuiOutlinedInput: {...inputOutlined},
        MuiTextField: {...textField},
        MuiAutocomplete: {...autocomplete},
        // MuiCheckbox: {...checkbox},
        MuiFormControlLabel: {...formControlLabel},
        MuiFormLabel: {...formLabel},
        MuiRadio: {...radio},
        MuiSelect: {...select},
        MuiSwitch: {...switchButton},
        MuiList: {...list},
        MuiListItem: {...listItem},
        MuiListItemText: {...listItemText},
        MuiAppBar: {...appBar},
        MuiAvatar: {...avatar},
        MuiBreadcrumbs: {...breadcrumbs},
        MuiButtonBase: {...buttonBase},
        MuiContainer: {...container},
        MuiDialog: {...dialog},
        MuiIcon: {...icon},
        MuiIconButton: {...iconButton},
        MuiInputBase: {...inputBase},
        MuiLinearProgress: {...linearProgress},
        MuiLink: {...link},
        MuiPopover: {...popover},
        MuiSlider: {...slider},
        MuiSvgIcon: {...svgIcon},
        MuiTable: {...table},
        MuiTooltip: {...tooltip},
    }

});


export default themeRtl