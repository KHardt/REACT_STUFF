import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employees =>
                    <div key={employees.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employees.name}
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employees.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
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