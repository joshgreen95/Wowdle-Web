import React from 'react'
import HelpButton from './Buttons/HelpButton'

export default function BottomBorder(props) {
  return (
    <div className='bottomborder'>
          <HelpButton showHelpScreen={props.showHelpScreen} />
    </div>
  )
}
