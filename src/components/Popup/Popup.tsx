import { FC, JSX, MouseEventHandler } from "react";
import IPopupProps from "../../interfaces/IPopupProps";
import styles from './Popup.module.scss';

const Popup: FC<IPopupProps> = ({children, activePopup, setActivePopup}):JSX.Element => {

    const handleClick: Function = (e:MouseEvent) => {
        if((e.target as HTMLDivElement).classList.contains(styles.wrapper)) {
            setActivePopup((prev: boolean): boolean => !prev)
        }
    }

    return (
        <div className={styles.wrapper} style={activePopup ? {display: 'flex'} : {display:'none'}} 
        onClick={(e): MouseEventHandler<HTMLDivElement> => handleClick(e)}>
            <div className={styles.popup}>
                {children}
            </div>
        </div>
    )
}

export default Popup