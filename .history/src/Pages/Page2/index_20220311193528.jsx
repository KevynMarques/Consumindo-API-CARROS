import { TextSelectP2, TextButtonP2, DadosAPi  } from "../../Components/Textos/Style";
import { ButtonP2, LimiteScroll, Marcas, Organizador} from '../../Components/Containers/style'
import Car from '../../Images/carro.jpg'
import Moto from '../../Images/moto.png'
import Caminhao from '../../Images/caminhao.png'
import { TextSelectMarca } from "../../Components/Textos/Style";
import { useEffect } from "react";
import { api } from "../../Services/api";
import { useState } from "react";
import { BotaoProximo, BotaoVermais, BotaoVoltar } from "../../Components/BotoesGenericos/style";



export default (props) => {

  const [marcas, setMarcas] = useState([])
  const [ver, setVer] = useState(false); 
   
  useEffect(() =>{ 
    api.get(`/carros/marcas`).then((response)=>{
      setMarcas(response.data)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])
   
  return (
    <>
      <TextSelectP2>
        Selecione o tipo do veiculo
      </TextSelectP2>

      <ButtonP2>
      <img src={Car} />
      <TextButtonP2  style={{left:28}}>Carros</TextButtonP2>
      </ButtonP2>

      <ButtonP2 style={{left:620}}>
      <img src={Moto} />
      <TextButtonP2 style={{left:33}}>Motos</TextButtonP2>
      </ButtonP2>

      <ButtonP2 style={{left:780}}>
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
        }) : marcas.map(())}
         </Organizador>

         <BotaoVermais>Ver mais...</BotaoVermais>

         <BotaoProximo>
           <p>
             Proximo
           </p>
         </BotaoProximo>
         <BotaoVoltar>Voltar</BotaoVoltar>
     </>

  );
}