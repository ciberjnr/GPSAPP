 import Reactcl, { useEffect, useState } from "react"
import { getFCP } from "web-vitals";
import GridItem from "./GridItem";
 
 export  const Grid =({category})=>
{
      const [images,setImages] = useState([])
      
      
      useEffect( ()=>
      {
          GetGif();
      },[0] )
   

     const GetGif = async ()=>
     {
          const url = "https://api.giphy.com/v1/gifs/search?q="+category+ " &limit=10&api_key=KY2ob09cXTaHTdyAPNtFlTH6hfz0qa1U"

          const resp = await fetch(url);

          const {data} = await resp.json()

     
          const gifs = data.map( img =>{

            return {

                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url

                
            }
              
          }
          
          )
          console.log(data)
          setImages(gifs)
     }
    
   
 

    return (

           <>
             <h3>{category}</h3>
            
                 {  images.map(  (img)=>(

                     <GridItem key={img} img={img}/>
                 ) )   }
        
           </>
    )  
}


export default Grid;