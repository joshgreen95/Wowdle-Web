//core
import React from 'react';
//params
import { gitLink, websiteLink, donationLink } from '../../modules/fblogic/params';

export default function Donate() {
  return (
    <div className='donate'>
          <h5>Wowdle doesn't use ads, consider showing some support by <a href='https://www.buymeacoffee.com/joshgreen' target='_blank'>Donating.</a></h5>
          <h5>Check out my <a href='https://github.com/joshgreen95' target='_blank'>GitHub.</a></h5>    
          <h5><a href='https://www.joshgreen.tech' target='_blank'><div id='career'>My Personal Site. I'm Open for work.</div></a></h5>
    </div>
  )
}
