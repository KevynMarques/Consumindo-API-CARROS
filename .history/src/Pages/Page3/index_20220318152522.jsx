import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";



export default ({route, navigate}) => {
  const {nome, codigo, veiculo} = route.params;
  return (
    <>
    <Sequencia></Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}