import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
  // custom hook
  const { images, isLoading } = useFetchGifs( category );
  //console.log('useFetchGifs: ', images, isLoading);

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Loading ...</h2>)
      }
      <div className="card-grid">
        {
          /* se pueden mandar las propiedades esparcidas */
          /*images.map(({ id, title, imgurl }) => (
            
            { <GifItem 
              id={id} 
              title={title} 
              imgurl={imgurl}
            />}
            
          ))*/
          /* o el parametro completo en un arreglo */
          images.map(( images ) => (
            <GifItem { ...images } />
          ))
        }
      </div>
    </>
  )
}
