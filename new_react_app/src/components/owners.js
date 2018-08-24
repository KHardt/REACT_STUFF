import React, { Component } from 'react'

export default class OwnerList extends Component {
    render () {
        return (
            <section className="owners">
            {
                this.props.owners.map(owners =>
                    <div key={owners.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {owners.name}
                                <a href="#"
                                    onClick={() => this.props.deleteOwner(owners.id)}
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
//import animal from "./animals"

class OwnerList extends Component {
    render() {
        

        //write the js here to filter and 

        {
            this.props.animals.map(animal =>
                <div key={animal.id}>
                    {animal.name}
                </div>
            )  
        },
    
        return (
            

            <section className="owners">
            {
                this.props.owners.map(owners =>
                    <div key={owners.id}>
                       {owners.name}
                    </div>
    
                )
            }
            </section>
        )
    }
}

export default OwnerList

//{`${owner.name} owns some ${animal.name}`} previously used to add animals...

*/