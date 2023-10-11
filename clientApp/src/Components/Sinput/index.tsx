import {forwardRef} from "react";
import SInputRoot from "./SInputRoot.ts";
import {ISInput} from "../../Types/MUI/Components/SInput.types.ts";


const SInput =
    forwardRef<HTMLInputElement, ISInput>((
        {
            width,
            border,
            padding,
            height,
            fullWidth = true,
            value,
            placeholder
        }
        , ref) => {
        return <SInputRoot
            fullWidth={fullWidth}
            placeholder={placeholder ?? ""}
            ref={ref}
            customstats={
                {
                    width,
                    border,
                    padding,
                    height,
                }
            }
            value={value}
        />
    });
export default SInput