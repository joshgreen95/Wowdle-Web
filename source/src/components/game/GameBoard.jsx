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
          <GuessBox order={1} />
          <GuessBox order={2} />
          <GuessBox order={3} />
          <GuessBox order={4} />
        </div>
        <div>
          <GuessForm />
        </div>
      </div>
    </>
  )
}
