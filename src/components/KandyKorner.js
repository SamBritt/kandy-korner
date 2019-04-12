import React, { Component } from 'react';
import StoreList from './stores/StoreList'
import EmployeeList from './employees/EmployeeList';
import CandyList from './candies/CandyList';

export default class KandyKorner extends Component {
    locations = [
        {id: 1, name: "Delaware"},
        {id: 2, name: "Tennessee"},
        {id: 3, name: "Wisconsin"}
    ]
    employees = [
        {id: 1, name: "Sam Britt"},
        {id: 2, name: "John Wick"},
        {id: 3, name: "Jones McJoneson"}
    ]
    candyType = [
        {id: 1, type: "Chocolate"},
        {id: 2, type: "Licorice"},
        {id: 3, type: "Taffy"}
    ]
    candy = [
        {id: 1, name: "Dove"},
        {id: 2, name: "Twizzler"},
        {id: 3, name: "Salt Water Taffy"}
    ]
    state = {
        stores: this.locations,
        employees: this.employees,
        candyType: this.candyType,
        candy: this.candy
    }

    render(){
        return (
            <div>
                <StoreList stores = {this.state.stores}/>
                <EmployeeList employees = {this.state.employees}/>
                <CandyList candy = {this.state.candy}/>
            </div>
        );
    }
}