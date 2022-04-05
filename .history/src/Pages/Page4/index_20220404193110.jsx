import React from "react";


export default () => {
  const navigate = useNavigate();
  const  {veiculo, nome, codigo, ver, setVer, nomeP3} = useContext(CustomContext);  
  return (  
 <> 


useEffect(() =>{ 

api.get(`/${veiculo}/marcas/${codigo}/modelos`).then((response)=>{
 setModelo(response.data.modelos)
}).catch(()=>{ 
 console.log('Erro api modelos')
})
}, [])

 </> 
  );
}