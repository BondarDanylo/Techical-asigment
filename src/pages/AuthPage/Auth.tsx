import { FC, JSX } from "react";
import Button from "../../components/Button/Button";
import styles from './Auth.module.scss'

const Auth: FC = ():JSX.Element => {
    return (
        <main className={styles.main}>
            <section className={styles.auth}>
                <Button type='Link' to='/transactions'>Кассир</Button>
                <Button type='Link' to='/transactions' buttonStyles={{background:'#e75151'}}>Админ</Button>
            </section>
        </main>
    )
}

export default Auth