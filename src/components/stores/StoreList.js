import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class StoreList extends Component {
    render() {
        return (
            <section className = "wrapper">
                <h1>Store List</h1>
                {
                    this.props.stores.map(store => 
                        <div key={store.id}>
                        <Link className = "nav-link" to = {`/location/${store.id}`}>{store.name}</Link>
                        </div>
                    )
                }
            </section>
        );
    }

}