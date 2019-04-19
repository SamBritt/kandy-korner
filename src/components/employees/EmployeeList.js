import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EmployeeList extends Component {

    render() {
        return (
            <section className="wrapper">
                <h1>Employee List</h1>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            <Link className="nav-link" to={`/employees/${employee.id}`}>{employee.name}</Link>
                            <button
                                onClick={
                                    () => this.props.removeEmployee("employees", employee.id)
                                }>Remove Employee</button>
                        </div>
                    )
                }
            </section>
        );
    }
}