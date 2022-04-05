import React from "react";
import { useNavigate } from "react-router-dom";
import { BotaoPage1 } from "../../Components/Containers/style";
import { DescPage1, Ola, BemVindo, TextVeiculo } from "../../Components/Textos/Style";
import Car from '../../Images/carro.jpg'




export default (props) => {
  const navigate = useNavigate(); 

  return (
  <>
      <Ola>Olá</Ola>
      <BemVindo>Bem vindo ao BRWebSite</BemVindo>
      <DescPage1>Aqui é possivel realizar buscas das informações mais relevantes, basta selecionar o tema abaixo</DescPage1>
      <BotaoPage1 onClick={()=>navigate("/Page2")}>
       <img src={Car} />
      </BotaoPage1>
      <TextVeiculo>Veiculos</TextVeiculo>
  </>

  );
}