import React, { Component } from "react";
import House from "../house/House";
import { Link } from "react-router-dom";
import axios from "axios";
import './dashboard.css'

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
        console.log("houses", this.state.houses);
      })
      .catch(err => console.log("Error in dashboard", err));
  }


  deleteHouse = id => {
    axios
      .delete(`/api/delete/${id}`)
      .then(res => {
        this.componentDidMount()
      })
      .catch(err => console.log("Delete is broken", err));
  };

  render() {
    return (
      <div>
        <header className='top-holder'>
         Dashboard
        <Link to={{ pathname: "/wizard" }}>         
          <button className='add-button'>Add New Property</button>
        </Link>
        </header>

        <div className="mapped-houses" key={0}>
          {this.state.houses.map((obj, index) => {
            return (
              <div key={index}>
                <House obj={obj} deleteHouse={this.deleteHouse} didMount={this.componentDidMount}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;