import React, { useState } from 'react'


const TextBox =({setCat})=>
{

    const [valor, setValor] = new useState('Escriba el valor')


    const Agregar =(e)=>
    {
        
       setValor( e.target.value )
   

    }

    const AgregarLista =()=>
    {

         setCat( x => [...x,valor])

    }
   

  
    return(

        <>
         <input onClick={AgregarLista}  onChange={ Agregar } value={valor}  type={"text"} /><br/>

        </>
       
    )
  

}

export const GifExpertApp = () =>
{
   
    

    
    const [categories,setCategories] = useState(['categoria'])
    const [valor, setValor] = new useState('Escriba el valor')
    const [color,setColor] = new useState("Valor")
    const handleAdd = async ()=>
    {
       
        const nombre = "jose"
        const edad = 90
   
        setCategories([...categories,valor ] )

     
             const query = "nombre=" + valor + "edad=" + edad;
            const res = await fetch(" https://localhost:44390/gps/gps/Guardar/"+ query, {mode: 'no-cors'} );
            
            const data = await res.json()
         setColor( data.nombre)
             console.log(" https://localhost:44390/gps/gps/Guardar/"+ nombre )
    }
    
    const Borrar =()=>
    {
        
         
        const id = document.getElementById("txtid").value

        if ( isNaN(id) == true || id =="" ) 
        {
            alert("el id debe ser numerico");
            return;
        }
        categories.pop()
        fetch(" https://localhost:44390/gps/gps/borrar/"+ id ,{mode: 'no-cors'});
        console.log(" https://localhost:44390/gps/gps/borrar"+ id )

        setCategories([...categories]  )

    }



    const Consultar = async ()=>
    { 
    
        const id = document.getElementById("txtid").value

        if ( isNaN(id) == true || id =="" ) 
        {
            alert("el id debe ser numerico");
            return;
        }

       const resp = await  fetch(" https://localhost:44390/gps/gps/Consultar/"+ id,{mode: 'no-cors'});

       const dato = await resp.json();
    
       console.log(dato.nombre)
       
           document.getElementById("texto").value = dato.nombre
       
    }




    const Agregar =(e)=>
    {
        
       setValor( e.target.value )

    }
  
    //<div  id='diva' >{color}</div> <br/>

   return(
       <>
          <h2>GPSAPP</h2>
          <hr/>
          
          <input onChange={ Agregar } value={valor}  type={"text"} />
          <input id ="texto" onChange={ Agregar } value={""}  type={"text"} /><br/>
    
          <button style={{backgroundColor:"lightblue"}} onClick={handleAdd } >Agregar</button>
          <button style={{backgroundColor:"pink"}} onClick={Borrar} >Borrar</button>
          <button style={{backgroundColor:"lightgreen"}} onClick={Consultar} >Consultar</button>
          <input id ="txtid" type={"text"} />
          
         
           <ol>
               <h1>
               {
                 categories.map(  (category,index)=> {return <li key={index} >{category} </li>}   )
               }


               </h1>
          
           </ol>

       </>


   )




}