import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BotaoProximo, BotaoVermais, BotaoVoltar, TextProximo } from "../../Components/BotoesGenericos/style";
import { Marcas, Organizador } from "../../Components/Containers/style";
import { DadosAPi, Sequencia, TextSelectP2 } from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom";



export default () => {
  const navigate = useNavigate();
  const  {ano, setAno} = useContext(CustomContext);
  const  {nomeP4, setNomeP4} = useContext(CustomContext);
  const  {codigoP4, setCodigoP4} = useContext(CustomContext);

  const  {veiculo, nome, codigo, ver, setVer, nomeP3, codigoP3, } = useContext(CustomContext);  
  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${codigo}/modelos/${codigoP3}/anos`).then((response)=>{
     setAno(response.data)     
     
    }).catch(()=>{ 
     console.log('Erro api anos')
    })
    }, []) 

    const Selected=(codigo, nome) =>{
      setCodigoP4(codigo);
      setNomeP4(nome); 
   }
   
   const View =() => { 
    setVer(!ver);
  }


  return (  
 <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome}  {'>'} {nomeP3} {'>'} {nomeP4}</Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Selecione o ano do veiculo
    </TextSelectP2> 

    <Organizador   style={{marginTop:130}} >
        { ver ? ano.map((ano, key)=>{
          return  (
           
              <Marcas  
              disabled={ codigoP4 === ano.codigo ? true : false }
              onClick={()=>( Selected(ano.codigo, ano.nome))}
              key={key} >
              <DadosAPi>
              {ano.nome}
              </DadosAPi>
               </Marcas>
           
          )
        }) : ano.map((ano, key)=> {

          return  (
           
            <Marcas   
            disabled={ codigoP4 === ano.codigo  ? true : false}
            onClick={()=> ( Selected(ano.codigo, ano.nome))}  
             key={key}>
            <DadosAPi>
            {ano.nome}
            </DadosAPi>
             </Marcas>
         
        )}).splice(0,3)}
        
         </Organizador> 

         
         <BotaoVermais onClick={View}>
         {ver ? 'ver menos...' : 'ver mais...'}
         </BotaoVermais>
    
    <BotaoProximo 
    onClick={()=> navigate("/Page5")} 
    disabled={ codigo  ? false : true}  >
       <TextProximo>Proximo</TextProximo>
    </BotaoProximo> 

    <BotaoVoltar  onClick={()=>navigate("/")}>
           Voltar
    </BotaoVoltar>
    </>
  );
}