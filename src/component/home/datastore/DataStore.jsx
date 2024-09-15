import { useState, useEffect, createContext } from "react";
import jsonData from '../../../data.json';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(jsonData);
    }, [])

    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};