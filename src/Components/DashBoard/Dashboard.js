import React, {Component} from 'react';
import House from '../House/House';

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        };
    }


    render(){
        return(
            <div>
                Dashboard
            <Link to={{pathname: '/wizard'}}>
                <button className='add-button'>Add New Property</button>
            </Link>
            </div>
        )
    }
}

export default Dashboard