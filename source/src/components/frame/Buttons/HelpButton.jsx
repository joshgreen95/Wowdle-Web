import React from 'react'

export default function HelpButton(props) {
  return (
      <input id='helpbutton' type='button' onClick={props.showHelpScreen} value='' />
  )
}
