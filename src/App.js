import { useState } from 'react'
import css from './index.css'
import Grid from './Grid.js'

const LeerDatos = ({agregar})=>
{
    const [valor,SetValor] =  useState("Bienvenido")
    
    const handleSubmit = (e)=>
    {

       e.preventDefault();


       agregar( (x)=> [valor,...x] )
    }
    

   return(
        

    <form onSubmit={handleSubmit}>

     <input  
        type="text"
        value ={valor}
        onChange={(e)=>{  SetValor(e.target.value)  }}
        
    />
    </form>
   
   )
  
}

function App({datos}) {

    
     const [marcas,setMarcas]= new useState(['toyota'])

     const agregar  = ()=>
     {
        
        setMarcas([...marcas,'marca'] )

     }


     const reset = ()=>
     {
        
        setMarcas(['toyota','bmw','honda','ferrari','mercedez'])

     }

    return(
       <>    
       <h1>Agregar Item </h1>

       <LeerDatos agregar={setMarcas} />
     
        <ol>

            {

               marcas.map(  category =>
                
                <Grid key={category} category={category} /> 
                ) 
                
            /*
            marcas.map( (x)=> { return <> <li key={x} >{x}</li>    <hr/>   </> }  )    
            }
         */}
        </ol>

        <button onClick={agregar} >Agregar</button>
        <button onClick={reset} >Reset</button>
  
       </>
 

    )

}


export default App;
