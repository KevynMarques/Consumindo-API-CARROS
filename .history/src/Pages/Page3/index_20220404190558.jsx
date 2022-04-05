import React, {useContext, useEffect, useState} from "react";
import { Sequencia, TextSelectP2, DadosAPi} from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom"; 
import {BotaoProximo, TextProximo ,  BotaoVoltar, BotaoVermais} from '../../Components/BotoesGenericos/style'
import { useNavigate } from "react-router-dom"; 
import {Organizador, Marcas} from '../../Components/Containers/style'
import { api } from "../../Services/api";


export default () => { 

  const [modelo, setModelo ] =  useState([]); 
  const [codigoP3, setCodigoP3 ] =  useState(); 
  const [nomeP3,  setNomeP3 ] =  useState(); 
  const navigate = useNavigate();
  const  {veiculo, nome, codigo, ver, setVer} = useContext(CustomContext);  


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${codigo}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api modelos')
    })
    }, [])



  const Selected=(codigo, nome) =>{
    setCodigoP3(codigo);
    setNomeP3(nome); 
 }

 
 const View =() => { 
  setVer(!ver);
}


  return (
    <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome}  {'>'} {nomeP3} </Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Selecione o modelo do veiculo
    </TextSelectP2> 

    <Organizador>
        { ver ? modelo.map((modelo, key)=>{
          return  (
           
              <Marcas  
              style={{marginTop:0}}
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
    onClick={()=> navigate("/Page3")} 
    disabled={ codigo  ? false : true}  >
       <TextProximo>Proximo</TextProximo>
    </BotaoProximo> 

    <BotaoVoltar  onClick={()=>navigate("/")}>
           Voltar
    </BotaoVoltar>
    </>
  );
}