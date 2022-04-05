import { createContext } from "react";
import { useState } from "react";

export const CustomContext  = createContext(); 

export function CustomContextProvider ({children}) {

  const [veiculo, setVeiculo] = useState('carros')
  const [nome, setNome] = useState('')
  const [codigo, setCodigo] = useState('')
  const [marcas, setMarcas] = useState([])
  const [ver, setVer] = useState(false); 
  const [modelo, setModelo ] =  useState([]); 

   return (
     <CustomContext.Provider value={{
       veiculo, setVeiculo, nome, setNome, 
       codigo, setCodigo, marcas, setMarcas, 
       ver, setVer, modelo, setModelo  
       }}>
       {children}
     </CustomContext.Provider>
   );
}