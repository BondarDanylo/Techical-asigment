import './App.scss';
import { JSX, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Auth from './pages/AuthPage/Auth';
import Transactions from './pages/TransactionsPage/Transactions';
import Layout from './layout/Layout';
import Currencies from './pages/CurrenciesPage/Currencies';
import Till from './pages/TillPage/Till';
import Clients from './pages/ClientsPage/Clients';
import data from './data/data'
import IData from './interfaces/IData';
import { TransactionContext } from './context/TransactionContext';
import currencies from './data/currencies';

function App(): JSX.Element {

  const [seed, setSeed] = useState<Array<IData>>(data)
  const [currencyList, setCurrencyList] = useState(currencies)

  return (

    <TransactionContext.Provider value={{seed, setSeed, currencyList, setCurrencyList}}>
          <BrowserRouter>
            <Routes>
              <Route index path='/' element={<Auth />}/>

              <Route element={<Layout/>}>
                <Route path='/transactions' element={<Transactions />}/>
                <Route path='/currencies' element={<Currencies />}/>
                <Route path='/till' element={<Till />}/>
                <Route path='/clients' element={<Clients />}/>
              </Route>

              <Route path='*' element={<Auth />}/>
            </Routes>
          </BrowserRouter>
    </TransactionContext.Provider>
  );
}

export default App;
