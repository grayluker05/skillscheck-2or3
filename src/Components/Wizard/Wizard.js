import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

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
    
    handleAddButton = () => {
        const { property_name, address, city, state, zip, image_url, morgage, rent } = this.state
        axios.post("/api/add", { property_name, address, city, state, zip, image_url, morgage, rent}).then(res => {
        })
        this.setState({
          property_name: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          image_url: "",
          morgage: "",
          rent: ""
        })
    
      }

    handleNext = () => {
        const { property_name, address, city, state, zip } = this.state
        this.setState({
          property_name: property_name,
          address: address,
          city: city,
          state: state,
          zip: zip
        })
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
                placeholder='name'
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
                <Link to ={{pathname: '/'}}>
                    <button onClick={this.handleAddButton}>Add</button>
                </Link>
                <Link to = {{pathname: '/step2'}}>
                    <button handleNext = {this.handleNext}>Next</button>
                </Link>
            </div>
        )
    }
}

export default Wizard;