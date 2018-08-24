import React, { Component } from 'react'
import './location.css';


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(locations =>
                    <div key={locations.id}>
                        {`${locations.name} ${locations.address}`}

                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList





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