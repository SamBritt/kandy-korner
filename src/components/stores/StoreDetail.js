import React, { Component } from 'react'

export default class StoreDetail extends Component {

    state = {
        saveDisabled: false
    }
    render() {
        return (
            <React.Fragment>
                <section>
                    <div key = {this.props.location.id}>
                        <h4>
                            {this.props.location.name}
                        </h4>
                        <button onClick = {
                            () => {
                                this.setState(
                                    {saveDisabled : true}
                                )
                            }
                        } disabled = {this.state.saveDisabled}
                        className = "card-link">Delete Location</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}