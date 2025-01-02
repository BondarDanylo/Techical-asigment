import { FC, JSX } from "react";
import useTransactionContext from "../../context/TransactionContext";
import IData from "../../interfaces/IData";
import styles from './Table.module.scss';

const Table: FC = (): JSX.Element => {

    const {seed} = useTransactionContext()


    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Операция</th>
                        <th>Валюта 1</th>
                        <th>Сумма 1</th>
                        <th>Валюта 2</th>
                        <th>Сумма 2</th>
                        <th>Курс</th>
                        <th>Время</th>
                        <th>Клиент</th>
                    </tr>
                </thead>
                <tbody>
                    {seed.map((item: IData, index: number) => {
                        return (
                            <tr key={index}>
                                <td style={item.type === 'Покупка' ? {background: '#11c365'}: {background: '#e75151'} }>
                                    {item.type}
                                </td>
                                <td>
                                    {item.firstCurrency}
                                </td>
                                <td>
                                    {item.firstAmount}
                                </td>
                                <td>
                                    {item.secondCurrency}
                                </td>
                                <td>
                                    {item.secondAmount}
                                </td>
                                <td className={styles.rate}>
                                    {item.rate}
                                </td>
                                <td>
                                    {item.time}
                                </td>
                                <td>
                                    {item.client}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table