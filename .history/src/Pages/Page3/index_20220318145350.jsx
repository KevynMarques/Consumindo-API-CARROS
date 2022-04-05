import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";



export default (route, navigate) => {
  const {veiculo, nome, codigo} = router.params;
  return (
    <>
    <Sequencia>veiculo {">"} {veiculo} {">"} {nome} </Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}