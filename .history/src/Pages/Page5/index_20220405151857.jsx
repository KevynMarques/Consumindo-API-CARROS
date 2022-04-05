import React, {useContext, useEffect, useState} from "react";
import { Sequencia, TextSelectP2, DadosAPi} from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom"; 
import {BotaoProximo, TextProximo ,  BotaoVoltar, BotaoVermais} from '../../Components/BotoesGenericos/style'
import { useNavigate } from "react-router-dom"; 
import {Organizador, DadosVeiculo, Info} from '../../Components/Containers/style'
import { api } from "../../Services/api";


export default () => {

  const  {veiculo, nome, codigo, ver, setVer, nomeP3, codigoP3, nomeP4 } = useContext(CustomContext);  
  return (
    <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome}  {'>'} {nomeP3} {'>'} {nomeP4}</Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Dados do veiculo
    </TextSelectP2> 

    <Organizador   style={{marginTop:130}} >
       
         
    <DadosVeiculo
               key={key}>

                <Info style={{fontSize:30}}
                >{dados.Valor}</Info>

                <Info style={{marginTop:50}}>
                {dados.Marca}</Info>

                <Info style={{marginTop:100}}>
                {dados.Modelo}</Info>

                <Info style={{marginTop:150, fontSize:18 }}>
                {dados.AnoModelo}</Info>
                
                <Info style={{marginTop:200}}>
                {dados.Combustivel}</Info>

                <Info style={{marginTop:250}}>
                {dados.CodigoFipe}</Info>

                <Info style={{marginTop:300}}>
                {dados.MesReferencia}</Info>

                <Info style={{marginTop:350}}>
                {dados.SiglaCombustivel}</Info>
                
                <Info style={{marginTop:400}}>
                {dados.TipoVeiculo}</Info>

               </DadosVeiculo>

         </Organizador> 

    </>
  ); 
} 