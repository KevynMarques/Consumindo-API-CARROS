import React, {useContext} from "react";
import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom";

export default () => { 
  const  {veiculo, setVeiculo} = useContext(CustomContext); 
  return (
    <>
    <Sequencia>veiculo .... {veiculo</Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}