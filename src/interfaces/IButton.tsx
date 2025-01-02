import { MouseEventHandler } from "react";

interface IButton {
    children: string,
    type: 'button' | 'Link' | 'NavLink',
    to: string,
    isRounded?: boolean,
    buttonStyles?: object,
    onClick?: MouseEventHandler,
}

export default IButton