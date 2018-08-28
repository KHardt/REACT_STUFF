const remoteURL = "http://localhost:5002"

export default Object.create(null, {
   
    getAll: {
        value: function (resource) {
            return fetch(`${remoteURL}/${resource}`).then(e => e.json())
        }
    },

    delete: {
        value: function (resource, id) {
            //console.log(`${remoteURL}/animals/${id}`)
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            })
            //.then(e => e.json())
            .then(() => fetch(`${remoteURL}/${resource}`))
            .then(e => e.json())
        }

    }



})

