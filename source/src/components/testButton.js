import React from 'react'
import { formatNPCList } from '../modules/handleNPC'

export default function TestButton() {
    
    const displayDBItems = () => {
        formatNPCList();
    }
    
    return (
    <div>
        <button onClick={displayDBItems}>Test</button>
    </div>
  )
}
