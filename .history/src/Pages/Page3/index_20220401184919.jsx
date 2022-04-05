import React, {useContext} from "react";
import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom"; 
import {BotaoProximo} from '../../Components/BotoesGenericos/style'


export default () => { 
  const  {veiculo} = useContext(CustomContext); 
  const  {nome} = useContext(CustomContext); 
  return (
    <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome} </Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Selecione o modelo do veiculo
    </TextSelectP2>
    
    <BotaoProximo 
    onClick={()=> navigate("/Page3")} 
    disabled={ codigo  ? false : true}  >
       <TextProximo>Proximo</TextProximo>
  </BotaoProximo>
    </>
  );
}