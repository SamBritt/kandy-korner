import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StoreList from './stores/StoreList'
import EmployeeList from './employees/EmployeeList';
import CandyList from './candies/CandyList';

export default class KandyKorner extends Component {
    state = {
        stores: [],
        employees: [],
        candyType: [],
        candy: []
    }
    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/locations")
            .then(r => r.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/candy"))
            .then(r => r.json())
            .then(candy => newState.candy = candy)
            .then(() => fetch("http://localhost:5002/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => this.setState(newState))
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
                    return <CandyList candy={this.state.candy} />
                }} />
            </React.Fragment>
        );
    }
}