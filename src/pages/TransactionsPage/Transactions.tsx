import { FC, JSX, MouseEventHandler, useState } from "react";
import Button from "../../components/Button/Button";
import Popup from "../../components/Popup/Popup";
import Table from "../../components/Table/Table";
import Form from '../../components/Form/Form';
import styles from './Transactions.module.scss';

const Transactions: FC = (): JSX.Element => {

    const [activePopup, setActivePopup] = useState<boolean>(false)
    
    const handleClick: MouseEventHandler = (): void => {
        setActivePopup((prev: boolean): boolean => !prev)
    }

    return (
        <section className={styles.transactions}>
            <div className={styles.buttons}>
                <div className={styles.wrapper}>
                    <Button isRounded type='button' to=''>Поиск</Button>
                    <Button isRounded type='button' to=''>Кнопка</Button>
                </div>
                <Button onClick={handleClick} isRounded type='button' to=''>Добавить</Button>
            </div>
            <Table />

            <Popup activePopup={activePopup} setActivePopup={setActivePopup}>
                <Form setActivePopup={setActivePopup}/>
            </Popup>
        </section>
    )
}

export default Transactions