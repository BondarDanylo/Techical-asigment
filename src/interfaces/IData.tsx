interface IData {
    type: 'Покупка' | 'Продажа',
    firstCurrency: string,
    firstAmount: number,
    secondCurrency: string,
    secondAmount: number;
    rate: number,
    time:  number,
    client: string | number,
}

export default IData