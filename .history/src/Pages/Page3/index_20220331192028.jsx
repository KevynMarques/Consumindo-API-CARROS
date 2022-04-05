
import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";

export default ({veiculo}) => { 
  return (
    <>
    <Sequencia>veiculo {veiculo}</Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}