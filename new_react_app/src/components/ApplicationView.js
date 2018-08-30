import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './LocationList/locationNorth'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/owners"
import APIManager from "../modules/APIManager"
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owners/OwnersDetail'
import AnimalForm from './animals/AnimalForm'
import OwnerForm from './owners/OwnerForm'
import AnimalEdit from './animals/AnimalEdit'
import Login from './Login'
import "./ApplicationView.css"
import EmployeeForm from './employee/EmployeeForm';


class ApplicationViews extends Component {


    state = {
        // data: {
            locations: [],
            animals: [],
            employees: [],
            owners: []
            // }
    }

    isAuthenticated = () => localStorage.getItem("credentials") !== null




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

    addAnimal = (animal) => APIManager.post("animals", animal)
    .then(() => APIManager.getAll("animals"))
    .then(animals => this.setState({
    animals: animals
    }))

    addEmployee = (employee) => APIManager.post("employees", employee)
    .then(() => APIManager.getAll("employees"))
    .then(employees => this.setState({
    employees: employees
    }))


    addOwner = (owner) => APIManager.post("owners", owner)
    .then(() => APIManager.getAll("owners"))
    .then(owners => this.setState({
    owners: owners
    }))

    
    editAnimal = (id, newEntry) => APIManager.patch(id, "animals", newEntry)
    //i need the entry first- and only do patch after the edits are done
    .then(() => APIManager.getAll("animals"))
    .then(animals => this.setState({
    animals: animals
    }))



   
    render() {
        return (
            <React.Fragment>
                <div className="viewArea">
                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                    return <EmployeeList {...props} deleteEmployee={this.deleteEmployee}
                                animals={this.state.animals}
                                employees={this.state.employees}
                                deleteAnimal={this.deleteAnimal} />
                    } else {
                    return <Redirect to="/login" />
                    }
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />

                    <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                    return <AnimalEdit {...props} 
                    editAnimal={this.editAnimal} 
                    animals={this.state.animals} 
                    employees={this.state.employees}/>
                    }} /> 

                
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />

                    <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                    addAnimal={this.addAnimal}
                    employees={this.state.employees} />
                    }} />

                    <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                    addEmployee={this.addEmployee}
                    employees={this.state.employees} />
                    }} />

                    <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                    addOwner={this.addOwner}
                    owners={this.state.owners} />
                    }} />
                    <Route path="/login" component={Login} />

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

    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
*/

