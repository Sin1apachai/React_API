import React, { Component } from 'react'
import { Link } from 'react-router'

// import { connect } from 'react-redux'

class User extends Component {
    render() {
        const { data } = this.props

        return (
            <div>
                {/* <Link to={`/album/${data.id}`}>{data.name}</Link> */}
                <Link to={`/album/${data.id}/${data.name}`}>{data.name}</Link>
            </div>
        )
    }
}
export default User