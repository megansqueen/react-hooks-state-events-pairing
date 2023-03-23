import React from "react";

function Comment({ videoArray }) {

return (
    <div>
            <h1>{videoArray.length} Comments</h1>
                <div>
                    {videoArray.map(item => 
                    <h2 key={item.id}>{item.id}<br /><small>{item.comment}</small></h2>)}
                </div>
    </div>
    )
}

export default Comment
