import React from "react";
import { BotaoPage1 } from "../../Components/Containers/style";
import { DescPage1, Ola, BemVindo } from "../../Components/Textos/Style";
import Car from '../../Images/carro.png'

export default (props) => {
  
  return (
  <>
      <Ola>Olá</Ola>
      <BemVindo>Bem vindo ao BRWebSite</BemVindo>
      <DescPage1>Aqui é possivel realizar buscas das informações mais relevantes, basta selecionar o tema abaixo</DescPage1>
      <BotaoPage1>
       <image src={Car} />
      </BotaoPage1>
  </>

  );
}