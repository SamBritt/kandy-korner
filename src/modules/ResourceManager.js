const remoteURL = "http://localhost:5002"

export default{
    get(id, obj){
        return fetch(`${remoteURL}/${obj}/${id}`)
        .then(e => e.json())
    },
    getAll(obj){
        return fetch(`${remoteURL}/${obj}`)
        .then(e => e.json())
    },
    delete(obj, id){
        return fetch(`${remoteURL}/${obj}/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
    }
}