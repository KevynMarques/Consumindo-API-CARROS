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
border-:${props => props.disabled? '#eb1a1a' : '#ffffff'};
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
border: solid 1px #FC570C;
width: 180px;
`;


export const Organizador = styled.div `
   margin-top: 300px;
   flex-direction: row;
   flex-wrap: wrap;
   display: flex;
   width: 600px;
   margin-left: 400px;
`;