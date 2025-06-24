import { useState } from "react";


/** En este modulo, vamos a mandar un evento al padre  */
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('AppleTV Pachinko');

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  
    // prevenir valores en blanco
    const cleanInput = inputValue.trim();
    if(cleanInput.length < 1) { return; }
    
    // mandamos el input en mi nueva funciona `onNewCategory()`
    onNewCategory(cleanInput);
    // borramos el inputValue despues de insertar valores
    setInputValue('');
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        onChange={ onInputChange }
        placeholder="Busca una categoría"
        type="text"
        value={ inputValue }
      />
    </form>
  )
}
