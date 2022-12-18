import { render } from '@testing-library/react';
import React from 'react';
import { formatNPCList, getDailyRandNPC } from '../../modules/fblogic/handleNPC.js';
import { getImg } from '../../modules/fblogic/getIMG.js';




const Prof = (props) => {
    return (
        <div className="frame">
            <img src={props.img} id='NPCImage' height='400'></img>
            <h1>{props.name}</h1>
            <p>Zone: {props.zone}</p>
            <p>Continent: {props.continent}</p>
        </div>
    )
}

export default class TestButton extends React.Component {
    
    constructor(props){
        super(props);
    };
    
    componentDidMount()
    {
        formatNPCList();
    };

    displayDBItems = () => {
        const npc = getDailyRandNPC();
        const Img = getImg();
        console.log( Img);
        render(<Prof img={Img} name={npc.name} zone={npc.zone} continent={npc.continent}/>, document.getElementById("Game"));
    };

    render() {
        return (
            <div>
                <button onClick={this.displayDBItems.bind(this)}> Test </button>
            </div >
        );
    }
}