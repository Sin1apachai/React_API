import React, { Component } from 'react'
import UserList from '../Users/UserList'
// import { connect } from 'react-redux'
// import { loadUsers } from '../actions/action'
import { gql, graphql } from 'react-apollo'

class User extends Component {
    // componentDidMount() {
    //     this.props.dispatch(loadUsers())
    // }

    render() {
        const { data: { allUser, error, loading } } = this.props

        if (error) {
            return <div>Error....</div>
        }
        return (
            <div>
                <h1>Users</h1>
                {loading && <div>Loading...</div>}
                {allUser && <UserList data={allUser} />}
            </div>
        )
    }
}
const GraphQL = graphql(gql`
    query {
        allUser{
            id
            name
            username
            email
        }
    }
`
)(User)
export default GraphQL

