import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import StoreList from './stores/StoreList'
import StoreDetail from './stores/StoreDetail'
import EmployeeList from './employees/EmployeeList';
import EmployeeDetail from './employees/EmployeeDetail'
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
    removeCandy = (obj, id) => ResourceManager.delete(obj, id)
        .then(() => ResourceManager.getAll("candy"))
        .then(candies => {
            this.props.history.push("/candy")
            this.setState({ candy: candies })
        })
    removeLocation = (obj, id) => ResourceManager.delete(obj, id)
        .then(() => ResourceManager.getAll("locations"))
        .then(store => {
            this.props.history.push("/")
            this.setState({ stores: store })
        })
    removeEmployee = (obj, id) => ResourceManager.delete(obj, id)
        .then(() => ResourceManager.getAll("employees"))
        .then(employee => {
            this.props.history.push("/employees")
            this.setState({ employees: employee })
        })

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores}
                        removeLocation={this.removeLocation} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.stores.find(store =>
                        store.id === parseInt(props.match.params.locationId)
                    )
                    if (!location) {
                        location = { id: 404, name: "404 Location Not Found" }
                    }
                    return <StoreDetail location={location}
                        removeLocation={this.removeLocation} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                        removeEmployee={this.removeEmployee} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    if (!employee) {
                        employee = { id: 404, name: "404 Employee Not Found" }
                    }
                    return <EmployeeDetail employee={employee}
                        removeEmployee={this.removeEmployee} />
                }} />
                <Route exact path="/candy" render={(props) => {
                    return <CandyList removeCandy={this.removeCandy}
                        candy={this.state.candy}
                        candyType={this.state.candyType} />
                }} />
                <Route path="/candy/:candyId(\d+)" render={(props) => {
                    let candy = this.state.candy.find(candy =>
                        candy.id === parseInt(props.match.params.candyId)
                    )
                    if (!candy) {
                        candy = { id: 404, name: "Candy Not Found" }
                    }
                    return <CandyDetail
                        candy={candy}
                        removeCandy={this.removeCandy}

                    // candyType = {this.state.candyType} />
                    />
                }} />
            </React.Fragment>
        );
    }
}
export default withRouter(ApplicationViews)