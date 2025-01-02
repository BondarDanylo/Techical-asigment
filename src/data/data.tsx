import IData from "../interfaces/IData";

const data: Array<IData> = [
    {
        type: 'Покупка',
        firstCurrency: 'EUR',
        firstAmount: 400,
        secondCurrency: 'UAH',
        secondAmount: 16000,
        rate: 45.0,
        time: Date.now(),
        client: 380668232467,
    },
    {
        type: 'Покупка',
        firstCurrency: 'USD',
        firstAmount: 100,
        secondCurrency: 'UAH',
        secondAmount: 4100,
        rate: 44.1,
        time: Date.now(),
        client: 380668232467,
    },
    {
        type: 'Продажа',
        firstCurrency: 'USD',
        firstAmount: 100,
        secondCurrency: 'UAH',
        secondAmount: 4100,
        rate: 44.0,
        time: Date.now(),
        client: 380668232467,
    },
]

export default data