import React, { Component } from 'react'

export default class CandyList extends Component {
    render() {
        return (
            <section className="wrapper">
                <h1>Candy List</h1>
                {
                    this.props.candy.map(candyItem =>
                        <div key={candyItem.id}>
                            {candyItem.name}
                            { } --- { }
                            {
                                this.props.candyType.find(chooseCandyType => candyItem.candyTypeId === chooseCandyType.id).type
                            }
                            <button
                                onClick = {() => this.props.removeCandy(candyItem.id)}>Remove Candy</button>
                        </div>
                    )
                }
            </section>
        );
    }
}