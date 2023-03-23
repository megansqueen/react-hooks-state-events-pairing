import React, { useState } from "react";

function Votes ({upvotes, downvotes}) {
    const[upCount, setUpCount] = useState(upvotes);
    const[downCount, setDownCount] = useState(downvotes);

    function handleVote(voteType) {
        if (voteType === "up"){
            setUpCount(upCount + 1)
        } else if(voteType === "down") {
            setDownCount(downCount + 1)
        }
    }

    return (
        <div>
            <button onClick={() => handleVote("up")}>{upCount}👍</button>
            <button onClick={() => handleVote("down")}>{downCount}👎</button>
        </div>
    )
}

export default Votes