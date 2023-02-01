import { createContext, useContext } from "react";

export const DataContext = createContext();

export function useDataContext() {
  const data = useContext(DataContext);
  return data;
}

export function DataProvider(props) {
  const {value, children} = props;
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

