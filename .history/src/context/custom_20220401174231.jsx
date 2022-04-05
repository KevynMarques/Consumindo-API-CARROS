import { createContext } from "react";
import Use

export const CustomContext  = createContext(); 

export function CustomContextProvider ({children}) {

  const [veiculo, setVeiculo] = useState('carros')

   return (
     <CustomContext.Provider>
       {children}
     </CustomContext.Provider>
   );
}