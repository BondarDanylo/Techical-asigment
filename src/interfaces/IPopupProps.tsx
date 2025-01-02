import { JSX } from "react";

interface IPopupProps {
    children: JSX.Element,
    activePopup: boolean,
    setActivePopup: Function,
}

export default IPopupProps