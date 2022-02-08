import React from 'react'

function Video({ video }) {
    return (
        <div className="just-video">
            <div
                dangerouslySetInnerHTML={{ __html: video }}
            ></div>
        </div>
    )
}

export default Video
