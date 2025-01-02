import { createContext, useContext } from "react";
import ITransactionContext from "../interfaces/ITransactionContext";

export const TransactionContext = createContext<ITransactionContext | undefined>(undefined)

const useTransactionContext: Function = (): ITransactionContext => {
    const context: ITransactionContext | undefined = useContext(TransactionContext)
    
    if(context === undefined) {
        throw new Error('context is missing')
    }
    
    return context
}

export default useTransactionContext
