import React from 'react'

export default function gameBoard() {

/*
        List of Internal Components : 
        -- Div for Game board
        -- Character profile picture :-- 
        -- 5 Guess boxes -- Each includes checkboxes if player has guessed correctly ; Zone, Continent, Faction???  
        -- Entry Field -- Sanitize input with lowercase 
*/
    return (
    <>
      <div className='gameboard'>
        <NPCImage />
        <div className='guessboxes'>
          <GuessBox order={0} />
          <GuessBox order={0} />
          <GuessBox order={0} />
          <GuessBox order={0} />
          <GuessBox order={0} />
        </div>
        <div>
          <EntryField />
          <SubmitButton />
        </div>
      </div>
    </>
  )
}
