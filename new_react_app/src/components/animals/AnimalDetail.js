import React, { Component } from "react"
import "./Animal.css"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        //const PossumImage = require("./unnamed.jpg");

        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={animal.image} alt="animal" className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title">{animal.breed}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                            .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>
                            <a href="#" //don't want to call function here!
                            onClick={() => this.props.history.push(`/animals/edit/${animal.id}`)}
                            className="card-link">Edit</a>
                    </div>
                </div>
            </section>
        )
    }
}