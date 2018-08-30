import React, { Component } from "react"
//import dog from "./DogIcon.png"
import "./Employee.css"
import AnimalCard from "../animals/AnimalCard"
const empImage = require("../animals/occupation-19-003-512.png");


export default class EmployeeList extends Component {
    render () {
        return (

            <React.Fragment>
                <div className="employeeButton">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        //console.log(this.props)
                        this.props.history.push("/employees/new")}
                    }>Add Employee</button>
                </div>

            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={empImage} className="icon--employee" />
                                {employee.name}
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</a>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">Caretaker For:</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>

                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}