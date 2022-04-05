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

  const  {veiculo, nome, codigo, ver, setVer, nomeP3, codigoP3, setModelo, modelo} = useContext(CustomContext);  
  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${codigo}/modelos${codigoP3}/anos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api ano')
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
 <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome}  {'>'} {nomeP3} {'>'} {n</Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Selecione o modelo do veiculo
    </TextSelectP2> 

    <Organizador   style={{marginTop:130}} >
        { ver ? modelo.map((modelo, key)=>{
          return  (
           
              <Marcas  
              disabled={ codigoP3 === modelo.codigo ? true : false }
              onClick={()=>( Selected(modelo.codigo, modelo.nome))}
              key={key} >
              <DadosAPi>
              {modelo.nome}
              </DadosAPi>
               </Marcas>
           
          )
        }) : modelo.map((modelo, key)=> {

          return  (
           
            <Marcas   
            disabled={ codigoP3 === modelo.codigo  ? true : false}
            onClick={()=> ( Selected(modelo.codigo, modelo.nome))}  
             key={key}>
            <DadosAPi>
            {modelo.nome}
            </DadosAPi>
             </Marcas>
         
        )}).splice(0,5)}
        
         </Organizador> 

         
         <BotaoVermais onClick={View}>
         {ver ? 'ver menos...' : 'ver mais...'}
         </BotaoVermais>
    
    <BotaoProximo 
    onClick={()=> navigate("/Page4")} 
    disabled={ codigo  ? false : true}  >
       <TextProximo>Proximo</TextProximo>
    </BotaoProximo> 

    <BotaoVoltar  onClick={()=>navigate("/")}>
           Voltar
    </BotaoVoltar>
    </>
  );
}