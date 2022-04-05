
import { useParams } from "react-router-dom";
import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";

export default () => { 

  const { nome } = useParams(); 
  return (
    <>
    <Sequencia>veiculo {nome{</Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}