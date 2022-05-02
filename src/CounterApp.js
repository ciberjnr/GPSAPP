import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';


const Texto =({enviar})=>
{
   const  cambiarValor  =()=>
   {
    
     enviar( x =>('palomnnnnnnnnnnnnnn') )

   }

   useEffect(
    ()=>
    {
      cambiarValor();
    },[]

   )
   
  return(
  
     <h1>Bienvendidos</h1>

  )


}


const CounterApp = ({value})=>
{
   const [valor,SetValor] = useState('Junior')

   return ( 

   <>

    <Texto  enviar={SetValor} />

     
   </> 
   )

}

export default CounterApp;


