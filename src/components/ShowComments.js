import React, { useState } from "react";
import Comment from "./Comment";

function ShowComments ({ buttonText, videoArray }) {
    console.log(videoArray)
    const[isShown, setIsShown] = useState(true)
    const[buttonTextState, setButtonTextState] = useState(buttonText)

    function toggleShow() {
        setIsShown(!isShown)
        setButtonTextState(isShown ? buttonText : "Show Comments");
    }

    return (
        <div>
            <button onClick={toggleShow}>{buttonTextState}</button>
            {isShown ? <Comment videoArray={videoArray}/> : null}
        </div>
    )
}

export default ShowComments;