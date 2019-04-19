import React, { Component } from 'react'

export default class EmployeeDetail extends Component {
    state = {
        saveDisabled: false
    }
    render() {
        return (
            <React.Fragment>
                <section className="wrapper">
                    <div key={this.props.employee.id}>
                        <h4>
                            {this.props.employee.name}
                        </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.removeEmployee("employees", this.props.employee.id)
                                )
                            }
                        } disabled={this.state.saveDisabled}
                            className="card-link">Delete Employee</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}