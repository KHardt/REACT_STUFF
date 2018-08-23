import React, { Component } from 'react'
import './location.css';


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {`${location.name} ${location.address}`}
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList





/*
export default class LocationNorth  extends Component {
    render() {
        console.log(this.props)
        return (
            <section>
                <h2>Nashville North location:</h2>
                <h3>500 North Street</h3>
            </section>
        );
    }
}
*/