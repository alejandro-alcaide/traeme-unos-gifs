import { useState } from "react";

import { AddCategory, AddCategoryStateful, GifGrid } from "./components";



export const GifExpertApp = () => {
  /* const giphyApiKey = "Rn1sPNgC7i1lqZNbK5YfyQmkWBSMLEHU";
    api url: api.giphy.com/v1/gifs/search  */
  const [categories, setCategories] = useState([
     /*'FX Shogun', 'Pachinko'*/ 'Kpop Demon hunters' ]);

  const onAddCategory = ( newCategory ) => {

    // skip insert if value already exists
    if(categories.includes(newCategory)) { return; }

    setCategories([newCategory, ...categories ]);
  };

  

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* <AddCategoryStateful setCategories={setCategories} /> */}
      <AddCategory onNewCategory={ onAddCategory } />
      { 
        categories.map( (category) => (
          <GifGrid 
            key={ category } 
            category={category} /> 
        ))
      }
    </>
  )
}
