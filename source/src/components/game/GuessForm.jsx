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
    props.UpdateWinLoss();
    ref.current.value = '';
  } 

  return (
    <form onSubmit={handleSubmit} id='guessform'> 
        <label htmlFor='guessfield' className='formlabel'>Take a Guess</label>
        <div id='textbox'>
          <input ref={ref} id='guessfield' type='text' disabled={props.controlsDisabled} autoComplete='off'/>
        </div>
    </form>
  )
}
