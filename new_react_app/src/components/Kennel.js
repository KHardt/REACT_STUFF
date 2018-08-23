import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationNorth from "./LocationList/locationNorth"
//import LocationSouth from "./LocationList/locationSouth"
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
    
        state = {
            employees: this.employeesFromAPI,
            locations: this.locationsFromAPI
        }

    render() {
            return (
                <article className="kennel">
                    <App />
                    <LocationNorth locations={this.state.locations} />
                    <br />
                    <br />
                    <EmployeeList employees={this.state.employees} />
                </article>
            )
        
    }
}

export default Kennel