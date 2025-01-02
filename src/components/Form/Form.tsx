import { ChangeEvent, FC, JSX, useState } from "react";
import useTransactionContext from "../../context/TransactionContext";
import IFormProps from "../../interfaces/IFormProps";
import Button from "../Button/Button";
import styles from './Form.module.scss';

const Form: FC<IFormProps> = ({setActivePopup}): JSX.Element => {
    const {setSeed, currencyList} = useTransactionContext()

    const [firstCurrency, setFirstCurrency] = useState<string>('USD')
    const [secondCurrency, setSecondCurrency] = useState<string>('UAH')
    const [tradeType, setTradeType] = useState<string>('Покупка')
    const [amountValue, setAmountValue] = useState<string | number>('100')
    const [rateValue, setRateValue] = useState<string | number>('44')
    const [clientAmount, setClientAmount] = useState<string | number>('5000')
    const [client, setClient] = useState<string>('38066452434')

    const handleChange = (e:ChangeEvent<HTMLInputElement>, func: Function): void => {
        func(+e.target.value)
    }

    const handleClick = (e:any):void => {
        e.preventDefault()
        setSeed((prev:Array<Object>):Array<Object> => [...prev, {
            type: tradeType,
            firstCurrency: firstCurrency,
            firstAmount: amountValue,
            secondCurrency: secondCurrency,
            secondAmount: Math.ceil(+amountValue * + rateValue),
            rate: rateValue,
            time: Date.now(),
            client: client,
        }])
        setActivePopup((prev:boolean):boolean => !prev)
        setFirstCurrency('USD'); setSecondCurrency('UAH'); setTradeType('Покупка')
        setAmountValue('100'); setRateValue('44'); setClientAmount('5000'); setClient('38066452434')
    }

    return(
        <form method='POST' id='form' className={styles.form}>
            <div className={styles.currencies}>
                <div className={styles.currencies__item}>
                    <label htmlFor="firstCurrency">Валюта 1</label>
                    <select  name="firstCurrency" id="firstCurrency" value='USD'
                    onChange={(e:ChangeEvent<HTMLSelectElement>) => setFirstCurrency(e.target.value)}>
                        {currencyList.map((currency: string, index: number): JSX.Element => {
                            return (
                                <option key={index} value={currency}>{currency}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.currencies__item}>
                    <label htmlFor="secondCurrency">Валюта 2</label>
                    <select name="secondCurrency" id="secondCurrency" value='UAH'
                    onChange={(e:ChangeEvent<HTMLSelectElement>) => setSecondCurrency(e.target.value)}>
                        {currencyList.map((currency: string, index: number): JSX.Element => {
                            return (
                                <option key={index} value={currency}>{currency}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className={styles.balance}>
                <div className={styles.balance__item}>
                    1000
                </div>
                <div className={styles.balance__item}>
                    20000
                </div>
            </div>
            <div className={styles.form__main}>
                <div className={styles.form__item}>
                    <label htmlFor="tradeType">Операция</label>
                    <select name="tradeType" id="tradeType" required value='Покупка'
                    onChange={(e:ChangeEvent<HTMLSelectElement>) => setTradeType(e.target.value)}>
                        <option value="Покупка">Покупка</option>
                        <option value="Продажа">Продажа</option>
                    </select>    
                </div>
                <div className={styles.form__item}>
                    <label htmlFor="amount">Сумма</label>
                    <input name='amount' type="number" 
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => handleChange(e, setAmountValue)} 
                    value={amountValue} min='0'step='10' required/> 
                </div>
                <div className={styles.form__item}>
                    <label htmlFor="rate">Курс</label>
                    <input name='rate' type="number" value={rateValue} 
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => handleChange(e, setRateValue)} 
                    min='0'step='0.01' required/> 
                </div>
                <div className={styles.form__item}>
                    <label htmlFor="clientAmount">Сумма от клиента</label>
                    <input name='clientAmount' type="number" value={clientAmount} 
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => handleChange(e, setClientAmount)} 
                    min='0'step='10' required/> 
                </div>
                <div className={styles.form__item}>
                    <label htmlFor="client">Клиент</label>
                    <input name='client' type="text" placeholder='38066452434' required
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setClient(e.target.value)}/> 
                </div>
            </div>
            <div className={styles.comment}>
                <label htmlFor="comment">Комментарий</label>
                <textarea name="comment" id="comment" placeholder='.....'></textarea>
            </div>
            <div className={styles.breadcrumps}>
                <p>Сумма к оплате: {Math.ceil(+amountValue * + rateValue)}</p>
                <p>Сдача: {+clientAmount - (+amountValue * + rateValue) > 0 
                ? Math.ceil(+clientAmount - (+amountValue * + rateValue))
                : `Клиента должен добавить - ${Math.abs(Math.ceil(+clientAmount - (+amountValue * + rateValue)))}`}</p>
            </div>
            <Button type='button' onClick={e => handleClick(e)} to='' 
            buttonStyles={{background:'#11c365', margin: '20px auto 0', boxShadow: 'none'}}>Сохранить</Button>
        </form>
    )
}

export default Form