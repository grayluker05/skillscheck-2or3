import React, {Component} from 'react';

class Wizard extends Component {
    constuctor(){
        super();
    }

    render(){
        return(
            <div>
                Wizard
                <Link to = {{pathname: '/'}}>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default Wizard;