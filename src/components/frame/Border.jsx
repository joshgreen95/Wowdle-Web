//Core
import React from 'react';
import StatsButton from './Buttons/StatsButton';

export default function Border(props) {
  return (
    <>
    <div className='border'>
        <StatsButton id='statsbutton' ShowStatScreen={props.ShowStatScreen} />
    </div>

    </>
  )
}