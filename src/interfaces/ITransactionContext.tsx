import React, { SetStateAction } from "react";
import IData from "./IData";

interface ITransactionContext {
    seed: Array<IData>,
    setSeed: React.Dispatch<SetStateAction<Array<IData>>>,
    currencyList: Array<string>,
    setCurrencyList: React.Dispatch<SetStateAction<Array<string>>>,
}

export default ITransactionContext