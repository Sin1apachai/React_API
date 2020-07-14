import React, { Component } from 'react'
import { Link } from 'react-router'

class Album extends Component {
    render() {
        const { data } = this.props

        if (data === null) {
            return (
                <div>
                    <h3>Not Load Albums</h3>
                </div>
            )
        }
        if (data !== null) {
            return (
                <div>
                    <h3>
                        <Link to={`/photo/${data.id}/${data.title}`}>{data.title}</Link>
                    </h3>
                </div>
            )
        }
    }
}
export default Album