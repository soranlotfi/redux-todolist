import {forwardRef} from "react";
import SInputRoot from "./SInputRoot.ts";
import {ISInput} from "../../Types/MUI/Components/SInput.types.ts";


const SInput =
    forwardRef<HTMLInputElement, ISInput>((
        {
            name,
            id,
            width,
            border,
            padding,
            height,
            fullWidth = true,
            value,
            label,
            onChange,
            placeholder,
            ...rest
        }
        , ref) => {
        return <SInputRoot
            fullWidth={fullWidth}
            placeholder={placeholder ?? ""}
            value={value}
            ref={ref}
            label={label}
            name={name}
            id={id}
            onChange={onChange}
            customstats={
                {
                    width,
                    border,
                    padding,
                    height,
                    ...rest
                }
            }
        />
    });
export default SInput