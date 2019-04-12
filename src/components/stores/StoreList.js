import React, { Component } from 'react'

export default class StoreList extends Component {
    render() {
        return (
            <section>
                <h1>Store List</h1>
                {
                    this.props.stores.map(store => 
                        <div key={store.id}>
                            {store.name}
                        </div>
                    )
                }
            </section>
        );
    }

}