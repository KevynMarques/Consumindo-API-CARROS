import styled from "styled-components"


export const BotaoVermais = styled.div `
width: 75px;
height: 18px;
margin-left: 415px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
text-decoration-line: underline;
color: #FC570C;
cursor: pointer;
margin-top: 20px;
`;


export const BotaoProximo = styled.div `
width: 187px;
height: 45px;
background:${props => props.disabled? 'rgba(252, 87, 12, 0.44);' : '#FC570C' };
border-radius: 10px;
text-align: center;
display: flex;
justify-content: center;
margin-left:810px;
margin-top: 100px;
cursor: pointer;

`;


export const BotaoVoltar = styled.div `
width: 49px;
height: 21px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-decoration-line: underline;
color: #FC570C;
margin-left: 410px;
margin-top: -30px;
margin-bottom: 25px;
cursor: pointer;
`;