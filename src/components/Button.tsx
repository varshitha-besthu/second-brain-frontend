import { ReactElement } from "react";
interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    StartIcon?: ReactElement,
    onClick?: () => void,
    fullWidth?: boolean,
    loading?: boolean,
    ref ?: any
}
const ButtonPropsStyle = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}
const DefaultStyles = "px-4 py-2 rounded-md font-light flex justify-center items-center cursor-pointer"
export function Button(props: ButtonProps) {
    return (
        <button className={ButtonPropsStyle[props.variant] + " " + DefaultStyles + " " + `${props.fullWidth ? "w-full text-center" : ""}` + " " + `${props.loading ? "opacity-60" : ""}`} disabled = {props.loading} onClick={props.onClick} ref={props.ref}>
            <div className="pr-2">
                {props.StartIcon}
            </div>
            {props.text}
        </button>
    )
}