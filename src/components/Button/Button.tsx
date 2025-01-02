import { FC, JSX } from "react";
import { Link, NavLink } from "react-router";
import IButton from "../../interfaces/IButton";
import styles from './Button.module.scss';

const Button: FC<IButton> = ({children, type, to, isRounded, buttonStyles, onClick}):JSX.Element => {

    const styledButton: Function = (isRounded: boolean, buttonStyles: Object): Object | undefined => {
        if(isRounded) {
            return  {...buttonStyles, borderRadius: '50px'}
        }
        return buttonStyles
    }

    if(type === 'button') {
        return (
            <button onClick={onClick} className={styles.button} style={styledButton(isRounded, buttonStyles)}>
                {children}
            </button>
        )
    } else if (type === 'Link') {
        return (
            <Link to={to} className={styles.button} style={styledButton(isRounded, buttonStyles)}>
                {children}
            </Link>
        )
    }else {
        return (
            <NavLink to={to} style={styledButton(isRounded, buttonStyles)}
            className={({ isActive }) => isActive 
            ? styles.button + ' ' +  styles.active
            : styles.button}>

                {children}

            </NavLink>
        )
    }
}

export default Button