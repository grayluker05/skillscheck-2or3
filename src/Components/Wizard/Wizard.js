import React, {Component} from 'react';

class Wizard extends Component {
    constuctor(){
        super();

        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            image_url: '',
            morgage: '',
            rent: ''
        };
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
                Wizard
                <Link to = {{pathname: '/'}}>
                    <button>Cancel</button>
                </Link>

                <input 
                name = 'property_name'
                value = {property_name}
                onChange={e => this.handleInput(e)}
                placeholder='Address'
                />

                <input 
                name = 'address'
                value = {address}
                onChange={e => this.handleInput(e)}
                placeholder='Address'
                />

                <input 
                name = 'city'
                value = {city}
                onChange={e => this.handleInput(e)}
                placeholder='City'
                />

                <input 
                name='state'
                value={state}
                onChange={e => this.handleInput(e)}
                placeholder='State'
                />

                <input 
                name='zip'
                value={zip}
                onChange={e => this.handleInput(e)}
                placeholder='Zip'
                />
            </div>
        )
    }
}

export default Wizard;