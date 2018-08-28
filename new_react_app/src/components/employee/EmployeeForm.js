import React, { Component } from "react"
//import "./Animal.css"

export default class EmployeeForm extends Component {
    // Set initial state //emplty like empty string to be blank
    state = {
        employeeName: "",
        
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployee = evt => {
        evt.preventDefault()
            const employee = {
                name: this.state.employeeName,
               
            }
            console.log("check", employee)
            // Create the animal and redirect user to animal list
            this.props.addEmployee(employee).then(() => 
            this.props.history.push("/employees"))
        }
    

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="employeeName"
                               placeholder="Employee name" />
                    </div>
                    
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}