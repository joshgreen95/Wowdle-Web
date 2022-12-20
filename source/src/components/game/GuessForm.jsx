import React from 'react'
import { CheckAnswer } from '../../modules/gamelogic/HandleSubmit'

export default function GuessForm() {
  return (
    <form onSubmit={console.log('Form Submitted')} id='guessform'>
      <div id='inputfield'>
        <input id='guessfield' type='text' />
      </div>
        <button id='submitbutton' type='submit'> </button>
    </form>
  )
}

// function HandleSubmit(){
//   let answerBool = CheckAnswer();

//   if(answerBool) {
//     alert("Answer is correct");
//   } else if(answerBool == null) {
//     throw ("Error in HandleSubmit: Bool hasnt been ");
//   } else {
//     alert("Answer is incorrect");
//   }
// }