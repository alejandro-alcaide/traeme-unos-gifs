import { useState } from "react";


/** pasamos la variable de estado setCategories de nuestro 
 * componente padre `GifExpertApp`. Esto no es malo pero
 * estamos asumiendo que sabemos que estamos mandando estas
 * variables de estado  */
export const AddCategoryStateful = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('AppleTV Pachinko');

  const onInputChange = (e) => {
    //console.log(e.target.value)
    setInputValue(e.target.value)
  };

  /* estamos haciendo el onSubmit solo para explorar como manda
  el evento de submit y que se "pide" otra vez pierde todo el 
  sitio, perdiendo lo que se estaba haciendo. Para evitarlo,
  usamos `e.preventDefault()` */
  const onFormSubmit = (e) => {
    e.preventDefault();
    //console.log('onFormSubmit: ', e);
    //console.log('onFormSubmit() - inputValue: ', inputValue);

    // prevenir valores en blanco
    if(inputValue.trim().length < 1) { return; }
    
    setCategories( categories => [...categories, inputValue]);
    // borramos el inputValue despues de insertar valores
    setInputValue('');
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        /* onChange solo recibe eventos, asi que podria mandar
        el valor como { onInputChange } y de todas formas lleva
        el objeto `evento` implicito */
        onChange={ (evento) => onInputChange(evento) }
        placeholder="Busca una categoría"
        type="text"
        
        value={ inputValue }
        
      />
    </form>
  )
}
