import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomContext } from "../../context/custom";
import { api } from "../../Services/api";



export default () => {
  const navigate = useNavigate();

  const  {veiculo, nome, codigo, ver, setVer, nomeP3, codigoP3, setModelo} = useContext(CustomContext);  
  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${codigo}/modelos${codigoP3}/anos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api ano')
    })
    }, [])
  return (  
 <> 


 

 </> 
  );
}