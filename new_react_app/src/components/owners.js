import React, { Component } from 'react'
import animal from "./animals"

class OwnerList extends Component {
    render() {
        

        //write the js here to filter and 
/*
        {
            this.props.animals.map(animal =>
                <div key={animal.id}>
                    {animal.name}
                </div>
            )  
        },
    */
        return (
            

            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                       {owner.name}
                    </div>
    
                )
            }
            </section>
        )
    }
}

export default OwnerList

//{`${owner.name} owns some ${animal.name}`} previously used to add animals...
