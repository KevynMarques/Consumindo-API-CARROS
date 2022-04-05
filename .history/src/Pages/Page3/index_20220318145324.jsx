import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";



export default (router, navigate) => {
  const {veiculo, nome, codigo} = router.params;
  return (
    <>
    <Sequencia>veiculo </Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}