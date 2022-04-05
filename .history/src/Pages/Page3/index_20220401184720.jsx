import React, {useContext} from "react";
import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom"; 
import {BotaoVermais} from '../../Components/BotoesGenericos/style'


export default () => { 
  const  {veiculo} = useContext(CustomContext); 
  const  {nome} = useContext(CustomContext); 
  const View =() => { 
    setVer(!ver);
  }
  return ( 
    <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome} </Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Selecione o modelo do veiculo
    </TextSelectP2>

    <BotaoVermais onClick={View}>
         {ver ? 'ver menos...' : 'ver mais...'}
     </BotaoVermais>
    </>
  );
}