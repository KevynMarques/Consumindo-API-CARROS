import styled from "styled-components"

export const BotaoPage1 = styled.div `
position: absolute;
width: 366px;
height: 315px;
left: 450px;
top: 225px;
background: #FAFAFA;
border: 1px solid #FC570C;
box-sizing: border-box;
border-radius: 10px;
cursor: pointer;

img {
    width: 250px;
    height: 250px;
    background: #FAFAFA;
    margin-left: 60px;
    margin-top: 20px;
    }
`; 




/* ----------------------- ELEMNTOS DA PAGINA 2 -------------------*/ 

export const ButtonP2 = styled.div `
position: absolute;
width: 110px;
height: 110px;
left: 460px;
top: 110px;
background: #FAFAFA;
border:${props => props.disabled ? ' 1px solid #eb1a1a' : ' 0px solid #ffffff'};
box-sizing: border-box;
border-radius: 10px;
cursor: pointer;

img {
  width: 80px;
  height: 80px;
  background-color: #FAFAFA;
 margin-left: 13px;
}
`;


export const Marcas = styled.div`
height: 30px;
background-color:white;
border-radius: 10px;
margin:10px;
width: 180px;
cursor: pointer;
border:${props => props.disabled ? ' 1px solid #eb1a1a' : ' 0px solid #ffffff'};
`;


export const Organizador = styled.div `
   margin-top: 300px;
   flex-direction: row;
   flex-wrap: wrap;
   display: flex;
   width: 600px;
   margin-left: 400px;
`;




/* ----------------------------------- ELEMNTOS DA ULTIMA PAGE  -----------------------------------------*/ 


export const DadosVeiculo = styled.div `
height: 46px;
top: 500px;
border-radius: 10px;
margin:10px;
align-items: center;
justify-content: center;
`;


export const Info = styled.p `
left: 800px;
position: absolute;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 35px;
color: #FC570C;
top:22;
`;

export const DadosPres = styled.p`
font-style: normal;
font-size: 20px;
line-height: 23px;
color: #FC570C;
position: absolute;
left: 400px;
top:40px
`;