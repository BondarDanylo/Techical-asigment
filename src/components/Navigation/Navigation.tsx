import { FC, JSX } from "react";
import IMenuLink from "../../interfaces/IMenuLink";
import Button from "../Button/Button";
import styles from './Navigation.module.scss';

const Navigation: FC = (): JSX.Element => {

    const menuLinkList:Array<IMenuLink> = [
        {link: 'transactions', name: 'Транзакция'}, 
        {link: 'currencies', name: 'Валюта'},  
        {link: 'till', name: 'Касса'}, 
        {link: 'clients', name: 'Клиенты'}, ]

    return (
        <footer className={styles.footer}>
            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                    {menuLinkList.map((item: IMenuLink, index: number): JSX.Element => {
                        return (
                            <li className={styles.menu__item} key={index}>
                                <Button isRounded type='NavLink' to={`/${item.link}`}>{item.name}</Button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </footer>
    )
}

export default Navigation