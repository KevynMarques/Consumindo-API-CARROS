import React, {useContext, useEffect, useState} from "react";
import { Sequencia, TextSelectP2, DadosAPi} from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom"; 
import {BotaoProximo, TextProximo ,  BotaoVoltar} from '../../Components/BotoesGenericos/style'
import { useNavigate } from "react-router-dom"; 
import {Organizador, Marcas} from '../../Components/Containers/style'
import { api } from "../../Services/api";


export default () => { 

  const [modelo, setModelo ] =  useState([]); 
  const navigate = useNavigate();
  const  {veiculo, nome, codigo, ver, marcas, setCodigo, setNome} = useContext(CustomContext);  


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${nome}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api modelos')
    })
    }, [])



  const Selected=(codigo, nome) =>{
    setCodigo(codigo);
    setNome(nome); 
 }


  return (
    <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome} </Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Selecione o modelo do veiculo
    </TextSelectP2> 

    <Organizador>
        { ver ? modelo.map((modelo, key)=>{
          return  (
           
              <Marcas 
              disabled={ codigo === modelo.codigo ? true : false }
              onClick={()=>( Selected(modelo.codigo, modelo.nome))}
              key={key} >
              <DadosAPi>
              {marca.nome}
              </DadosAPi>
               </Marcas>
           
          )
        }) : marcas.map((marca, key)=> {

          return  (
           
            <Marcas 
            disabled={ codigo === marca.codigo  ? true : false}
            onClick={()=> ( Selected(marca.codigo, marca.nome))}  
             key={key}>
            <DadosAPi>
            {marca.nome}
            </DadosAPi>
             </Marcas>
         
        )}).splice(0,5)}
        
         </Organizador>
    
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