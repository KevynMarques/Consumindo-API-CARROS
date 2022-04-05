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
  const [nomeP3,  setNomeP3 ] =  useState(); 
  const [codigoP3, setCodigoP3 ] =  useState(); 
  const [nomeP4,  setNomeP4 ] =  useState(); 
  const [codigoP4, setCodigoP4 ] =  useState(); 
  const [ano, setModelo ] =  useState([]);

   return (
     <CustomContext.Provider value={{
       veiculo, setVeiculo, nome, setNome, 
       codigo, setCodigo, marcas, setMarcas, 
       ver, setVer, modelo, setModelo, nomeP3, setNomeP3 , 
       codigoP3, setCodigoP3
       }}>
       {children}
     </CustomContext.Provider>
   );
}