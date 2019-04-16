import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StoreList from './stores/StoreList'
import EmployeeList from './employees/EmployeeList';
import CandyList from './candies/CandyList';
import ResourceManager from '../modules/ResourceManager'

export default class KandyKorner extends Component {
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
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candy" render={(props) => {
                    return <CandyList removeCandy={this.removeCandy}
                        candy={this.state.candy}
                        candyType={this.state.candyType} />
                }} />
            </React.Fragment>
        );
    }
}