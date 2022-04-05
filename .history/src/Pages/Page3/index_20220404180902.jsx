import React, {useContext} from "react";
import { Sequencia, TextSelectP2, DadosAPi} from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom"; 
import {BotaoProximo, TextProximo ,  BotaoVoltar} from '../../Components/BotoesGenericos/style'
import { useNavigate } from "react-router-dom"; 
import {Organizador, Marcas} from '../../Components/Containers/style'


export default () => { 


  const navigate = useNavigate();
  const  {veiculo, nome, codigo, ver, marcas, setCodigo, setNome} = useContext(CustomContext); 

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
        { ver ? marcas.map((ano, key)=>{
          return  (
           
              <Marcas 
              disabled={ codigo === marca.codigo ? true : false }
              onClick={()=>( Selected(marca.codigo, marca.nome))}
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