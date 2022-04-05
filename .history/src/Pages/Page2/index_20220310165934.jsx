import { TextSelectP2 } from "../../Components/Textos/Style";
import { ButtonP2 } from '../../Components/Containers/style'
import Car from '../../Images/carro.jpg'
import Moto from '../../Images/moto.png'
import Caminhao from '../../Images/caminhao.png'

export default (props) => {
  
  return (
  <>
      <TextSelectP2>
        Selecione o tipo do veiculo
      </TextSelectP2>

      <ButtonP2>
      <img src={Car} />
      </ButtonP2>
      <ButtonP2 style={{left:150}}>
      <img src={Moto} />
      </ButtonP2>
      <ButtonP2 style={{left:275}}> alo teste tres</ButtonP2>
  </>

  );
}