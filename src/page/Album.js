import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'
// import { loadAlbums } from '../actions/action'
import AlbumList from '../component/Album/AlbumList'

class Album extends Component {
    // componentDidMount() {
    //     this.props.dispatch(loadAlbums(this.props.params.userID))
    // }


    render() {
        // const { albums } = this.props

        // if (albums.isRejected) {
        //     return <div>Not Load Albums</div>
        // }
        console.log('id', this.props.params.userID)
        const { data: { albumsByUser, error, loading } } = this.props
        if (error) {
            return <div>Error....Not Load Album</div>
        }
        return (
            <div>
                {loading && <div>Loading...</div>}
                {albumsByUser && <AlbumList data={albumsByUser} />}
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return {
//         albums: state.albums
//     }
// }
// export default connect(mapStateToProps)(Album)

const query = gql`
    query album($userId: Int){
        albumsByUser(userId: $userId){
            userId
            id
            title
    }
 }
`
const GraphQL = graphql(query, {
    options(props) {
        return {
            variables: {
                userId: props.params.userID
            }
        }
    }
}
)(Album)
export default GraphQL