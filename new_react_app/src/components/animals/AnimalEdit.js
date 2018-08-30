
import React, { Component } from "react"
//import "./Animal.css"


export default class AnimalEdit extends Component {
    // Set initial state //emplty like empty string to be blank
    state = {
        name: "",
        breed: "",
        employeeID: ""
    }

    //Update state whenever an input field is edited
    
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

/*
handleFieldChange = (whichOne, evt) => {
    const updateAnimal = this.state.animal;
    const stateToChange = whichOne
    updateAnimal[stateToChange] = evt.target.value
    this.setState({updateAnimal})
 }
*/
    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    editOldAnimal = evt => {
        evt.preventDefault()
        let employeeID = this.state.employeeID
            const animal = {
                name: this.state.name,
                breed: this.state.breed,
                employeeID: employeeID
            }

            // Create the animal and redirect user to animal list
            this.props.editAnimal(this.props.match.params.animalId, animal).then(() => this.props.history.push("/animals"))
        }

        componentDidMount () {
            const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
            this.setState({
                name: animal.name,
                breed: animal.breed,
                employeeID: animal.employeeID
            })
        }
    


    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue = {this.state.name}
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               defaultValue={this.state.breed}
                               id="breed" placeholder="Breed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue={this.state.employeeID}name="employee" id="employeeID"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.ID} ID="employeeID">{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.editOldAnimal} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }

}

/*
Add animal Form:
Route includes
//need get single entry first
//then pass that into the form
getSingleEntry(id)
then(singleEntry => {
    Need component did mount:
    const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
    Component will take what props you passed in and set state
    the set state

componentDidMount:
const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
thisSetState(){
    animal: animal.name
    type: animal.type
}


})
*/