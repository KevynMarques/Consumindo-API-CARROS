import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BotaoProximo, BotaoVermais, BotaoVoltar, TextProximo } from "../../Components/BotoesGenericos/style";
import { Marcas, Organizador } from "../../Components/Containers/style";
import { DadosAPi, Sequencia, TextSelectP2 } from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom";
import { api } from "../../Services/api";



export default () => {
  const navigate = useNavigate();
  const  {ano, setAno} = useContext(CustomContext);
  const  {nomeP4, setNomeP4} = useContext(CustomContext);
  const  {codigoP4, setCodigoP4} = useContext(CustomContext);

  const  {veiculo, nome, codigo, ver, setVer, nomeP3, codigoP3} = useContext(CustomContext);  
  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${codigo}/modelos/${codigoP3}/anos`).then((response)=>{
     setAno(response.data)     
     
    }).catch(()=>{ 
     console.log('Erro api anos')
    })
    }, []) 

    const Selected=(codigo, nome) =>{
      setCodigoP4(codigo);
      setNomeP4(nome); 
   }
   
   const View =() => { 
    setVer(!ver);
  }


  return (  
  <><div></>
  );
}