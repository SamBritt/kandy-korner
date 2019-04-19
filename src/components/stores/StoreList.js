import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StoreList extends Component {
    render() {
        return (
            <section className="wrapper">
                <h1>Store List</h1>
                {
                    this.props.stores.map(store =>
                        <div key={store.id}>
                            <Link className="nav-link" to={`/locations/${store.id}`}>{store.name}</Link>
                            <button
                                onClick={() => this.props.removeLocation("locations", store.id)}>Remove Store</button>
                        </div>
                    )
                }
            </section>
        );
    }

}