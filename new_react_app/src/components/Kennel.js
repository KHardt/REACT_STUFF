import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationView"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel












/*
import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationNorth from "./LocationList/locationNorth"
//import LocationSouth from "./LocationList/locationSouth"
import AnimalList from "./animals"
import OwnerList from "./owners"
import App from '../App';
import './kennel.css'


class Kennel extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" },
        ]

        locationsFromAPI = [
            { id: 1, name: "Nashville North", address: "500 Circle Way" },
            { id: 2, name: "Nashville South", address: "10101 Binary Court" }
        ]

        animalsFromAPI = [
            {id:1, name: "Mean Monkeys"},
            {id:2, name: "Sad Polar Bears"},
            {id:3, name: "Pissed off Tigers"}
        ]
    

        ownersFromAPI = [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },

        ]
        
        state = {
            owners: this.ownersFromAPI,
            employees: this.employeesFromAPI,
            locations: this.locationsFromAPI,
            animals: this.animalsFromAPI
        }

    render() {
            return (
                <article className="kennel">
                    <App />
                    <LocationNorth locations={this.state.locations} />
                    <br />
                    <br />
                    <EmployeeList employees={this.state.employees} />
                    <br />
                    <OwnerList owners={this.state.owners} animals={this.state.animals}/>
                    <AnimalList animals={this.state.animals} />

                </article>
            )
        
    }
}

export default Kennel
*/