import { createContext } from "react";

export const CustomContext  = createContext(); 

export function CustomContextProvider ({children}) {
   return (
     <CustomContext.Provider>
       {children}
     </CustomContext.Provider>
   );
}