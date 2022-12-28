//Core
import React , { useRef } from 'react';
//Functions
import { HandleAnswer } from '../../modules/gamelogic/HandleAnswer';

export default function GuessForm(props) {
  const ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(ref.current.value === null) { return ;}
    HandleAnswer(ref.current.value);
    props.updateWinLoss();
  } 

  return (
    <form onSubmit={handleSubmit} id='guessform'>
      <div id='inputfield'>   
        <label for='guessfield' className='formlabel'>Take a Guess</label>
        <input ref={ref} id='guessfield' type='text' disabled={props.controlsDisabled} autoComplete='off'/>
      </div>
      
      <button id='submitbutton' type='submit'  disabled={props.controlsDisabled}></button>
    </form>
  )
}
