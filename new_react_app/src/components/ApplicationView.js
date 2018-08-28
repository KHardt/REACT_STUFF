import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals'
import LocationList from './LocationList/locationNorth'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners"
import APIManager from "../modules/APIManager"
import "./ApplicationView.css"


class ApplicationViews extends Component {


    state = {
        // data: {
            locations: [],
            animals: [],
            employees: [],
            owners: []
            // }
    }


    componentDidMount() {
        const newState = {} //

        APIManager.getAll("animals").then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })

        APIManager.getAll("locations").then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })

        APIManager.getAll("owners").then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })

        APIManager.getAll("employees").then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
       // .then(() => this.setState(newState)) ??



     //OLD fetchems:
        //fetch("http://localhost:5002/animals")
        //.then(r => r.json())
        //.then(animals => newState.animals = animals)
        //fetch("http://localhost:5002/locations")
            //.then(r => r.json())
            //.then(locations => newState.locations = locations)
        //fetch("http://localhost:5002/owners")
            //.then(r => r.json())
            //.then(owners => newState.owners = owners)
           // .then(() => fetch("http://localhost:5002/employees")
             //   .then(r => r.json()))
          //  .then(employees => newState.employees = employees)
           
    }


    deleteAnimal = (id) => { //this is where argument being passed
        APIManager.delete("animals", id).then(allAnimals => {
            this.setState({ //"animals is the url path!"
                animals: allAnimals
            })

        })
    }


    deleteEmployee = (id) => { //this is where argument being passed
        APIManager.delete("employees", id).then(allEmployees => {
            this.setState({ 
                employees: allEmployees
            })

        })
    }

    deleteOwner = (id) => { //this is where argument being passed
        APIManager.delete("owners", id).then(allOwners => {
            this.setState({ 
                owners: allOwners
            })

        })
    }


   
    render() {
        return (
            <React.Fragment>
                <div className="viewArea">
                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />

                </div>
            </React.Fragment>
        )
    }
}

export default ApplicationViews


 //old functions for state:
    /*
        deleteAnimal = id => {
            fetch(`http://localhost:5002/animals/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
        }
    */

    /*
    deleteEmployee = id => {
        fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            }))
    }

    */
   /*
    deleteOwner = id => {
        fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            }))
    }
*/
