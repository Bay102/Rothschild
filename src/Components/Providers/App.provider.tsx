import { createContext, useContext, useState } from "react";
import { AppContextType } from "../../types";

const AppContext = createContext({} as AppContextType);

export const AppProvider = ({ children }: { children: JSX.Element }) => { 
   const [component, setComponent] = useState<string>('home')
   

   return( 
      <AppContext.Provider value={{component, setComponent}} >
         {children}
      </AppContext.Provider>
   )
}

export const useAppProvider = () => useContext(AppContext);