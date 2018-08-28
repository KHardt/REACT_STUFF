import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class EmployeeList extends Component {
    render () {
        return (

            <React.Fragment>
            <div className="employeeButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        console.log(this.props)//will show history if works
                        this.props.history.push("/employees/new")}//history will be set at Route {...props} to bring all
                    }>Add Employee</button>
        </div>
            <section className="employees">
            {
                this.props.employees.map(employees =>
                    <div key={employees.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employees.name}
                                <Link className="nav-link" to={`/employees/${employees.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employees.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
        )
    }
}






/*
import React, { Component } from 'react'

class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employees =>
                    <div key={employees.id}>
                        {employees.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList



export default class EmployeeList  extends Component {
    render() {
        return (
            <article>
                <h1>Employee List</h1>
                <section>Jessica Younker</section>
                <section>Jordan Nelson</section>
                <section>Zoe LeBlanc</section>
                <section>Blaise Roberts</section>
            </article>
        );
    }
}
*/