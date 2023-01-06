import React from 'react'

export default function CloseWindow(props) {
  return (
    <div className='closebutton' onClick={props.CloseOverlay} unselectable='on'>X</div>
  )
}
