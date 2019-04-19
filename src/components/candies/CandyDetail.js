import React, { Component } from 'react'

export default class CandyDetail extends Component {

    state = {
        saveDisabled: false
    }

    render() {
        return (
            <React.Fragment>
                <section className = "wrapper">
                    <div key = {this.props.candy.id}>
                        <h4>
                            {this.props.candy.name}
                        </h4>
                        <button onClick = {
                            () => {
                                this.setState(
                                    {saveDisabled : true},
                                    () => this.props.removeCandy("candy", this.props.candy.id)
                                )
                            }
                        } disabled = {this.state.saveDisabled}
                        className = "card-link">Delete Candy</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}