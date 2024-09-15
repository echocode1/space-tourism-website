import React from 'react';
import Home from './component/home/PageBase';
import { DataProvider } from './component/home/datastore/DataStore';

function App() {
  return (
    <DataProvider>
        <Home/>
    </DataProvider>
  )
}

export default App