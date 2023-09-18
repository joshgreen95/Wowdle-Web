import React from 'react'
import HelpButton from './Buttons/HelpButton'

export default function BottomBorder(props) {
  return (
    <div className='bottomborder'>
          <HelpButton ShowHelpScreen={props.ShowHelpScreen} />
    </div>
  )
}
