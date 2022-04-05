import React, {useContext} from "react";
import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";
import 

export default () => { 
  const  {veiculo, setVeiculo} = useContext(CustomContext); 
  return (
    <>
    <Sequencia>veiculo</Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}