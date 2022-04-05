import React from "react";
import { TextSelectP2, TextButtonP2, DadosAPi  } from "../../Components/Textos/Style";
import { ButtonP2,Marcas, Organizador} from '../../Components/Containers/style'
import Car from '../../Images/carro.jpg'
import Moto from '../../Images/moto.png'
import Caminhao from '../../Images/caminhao.png'
import { TextSelectMarca } from "../../Components/Textos/Style";
import { useEffect } from "react";
import { api } from "../../Services/api";
import { useState } from "react";
import { BotaoProximo, BotaoVermais, BotaoVoltar } from "../../Components/BotoesGenericos/style";
import { useNavigate } from "react-router-dom";




export default (props) => {

  const navigate = useNavigate(); 
  const [veiculo, setVeiculo] = useState('carros')
 
  const [marcas, setMarcas] = useState([])
  const [ver, setVer] = useState(false); 
  
  const View =() => { 
    setVer(!ver);
  }

   
  useEffect(() =>{ 
    api.get(`/${veiculo}/marcas`).then((response)=>{
      setMarcas(response.data)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [veiculo])
   
  return (
    <>
      <TextSelectP2>
        Selecione o tipo do veiculo
      </TextSelectP2>
       
      <ButtonP2 onClick={()=>(setVeiculo('carros'))} 
       disabled={ veiculo === 'carros'  ? true : false}>
      <img src={Car} />
      <TextButtonP2  style={{left:28}}>Carros</TextButtonP2>
      </ButtonP2>

      <ButtonP2 style={{left:620}} 
       disabled={ veiculo === 'motos'  ? true : false}
       onClick={()=> setVeiculo('motos')}>
      <img src={Moto} />
      <TextButtonP2 style={{left:33}}>Motos</TextButtonP2>
      </ButtonP2>

      <ButtonP2 style={{left:780}} >
      <img src={Caminhao} />
      <TextButtonP2>Caminhões</TextButtonP2>
      </ButtonP2>

      <TextSelectMarca>Selecione a marca do veiculo</TextSelectMarca>
 
      <Organizador>
        { ver ? marcas.map((marca, key)=>{
          return  (
           
              <Marcas key={key}>
              <DadosAPi>
              {marca.nome}
              </DadosAPi>
               </Marcas>
           
          )
        }) : marcas.map((marca, key)=> {

          return  (
           
            <Marcas key={key}>
            <DadosAPi>
            {marca.nome}
            </DadosAPi>
             </Marcas>
         
        )}).splice(0,5)}
        
         </Organizador>

         <BotaoVermais onClick={View}>
         {ver ? 'ver menos...' : 'ver mais...'}
         </BotaoVermais>

         <BotaoProximo >
           <p>
             Proximo
           </p>
         </BotaoProximo>

         <BotaoVoltar  onClick={()=>navigate("/")}>
           Voltar
         </BotaoVoltar>
     </>

  );
}