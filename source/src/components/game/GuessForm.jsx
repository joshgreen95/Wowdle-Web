//Core
import React , { useRef } from 'react';
//Functions
import { HandleAnswer } from '../../modules/gamelogic/HandleAnswer';

export default function GuessForm() {
  const ref = useRef(null);
  
  const handleSubmit = (event) => {
    
    if(ref.current.value === null) { return ;}
    HandleAnswer(ref.current.value);
    ref.current.value = '';
    event.preventDefault();

  } 

  return (
    <form onSubmit={handleSubmit} id='guessform'>
      <div id='inputfield'>
        <input ref={ref} id='guessfield' type='text' />
      </div>
        <button id='submitbutton' type='submit' value={toString()}> </button>
    </form>
  )
}