import React from 'react'

const Photo = (props) => {
    const { data } = props

    if (data === null) {
        return (
            <div>
                <h3>Not Load Albums</h3>
            </div>
        )
    }
    return (
        <div>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        <img src={data.thumbnailUrl} alt={data.title} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        {data.title}
                    </div>
                </div>
            </article>
        </div>
    )
}
export default Photo