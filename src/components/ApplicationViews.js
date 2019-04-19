import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import StoreList from './stores/StoreList'
import StoreDetail from './stores/StoreDetail'
import EmployeeList from './employees/EmployeeList';
import CandyList from './candies/CandyList';
import CandyDetail from './candies/CandyDetail'
import ResourceManager from '../modules/ResourceManager'

class ApplicationViews extends Component {
    state = {
        stores: [],
        employees: [],
        candyType: [],
        candy: []
    }
    componentDidMount() {
        const newState = {}

        ResourceManager.getAll("locations")
            .then(stores => newState.stores = stores)
            .then(() => ResourceManager.getAll("candy"))
            .then(candy => newState.candy = candy)
            .then(() => ResourceManager.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() => ResourceManager.getAll("candyType"))
            .then(candyType => newState.candyType = candyType)
            .then(() => this.setState(newState))
    }
    removeCandy = id => {
        return fetch(`http://localHost:5002/candy/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => ResourceManager.getAll("candy"))
            .then(candy => this.setState({
                candy: candy
            }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.stores.find(store =>
                        store.id === parseInt(props.match.params.locationId)
                    )
                    if (!location) {
                        location = { id: 404, name: "404 Location Not Found" }
                    }
                    return <StoreDetail location={location} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/candy" render={(props) => {
                    return <CandyList removeCandy={this.removeCandy}
                        candy={this.state.candy}
                        candyType={this.state.candyType} />
                }} />
                <Route path="candy/:candyId(\d+)" render={(props) => {
                    let candy = this.state.candy.find(candy =>
                        candy.id === parseInt(props.match.params.candyId)
                    )
                    if (!candy) {
                        candy = { id: 404, name: "Candy Not Found" }
                    }
                    return <CandyDetail
                        removeCandy={this.removeCandy}
                        candy = {candy}
                        // candyType = {this.state.candyType} />
                        />
                }} />
            </React.Fragment>
        );
    }
}
export default withRouter(ApplicationViews)