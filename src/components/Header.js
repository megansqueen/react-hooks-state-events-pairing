import React, { useState } from "react";
import video from "../data/video";
import ShowComments from "./ShowComments";
import Votes from "./Votes.js";

function Header({ title, views, uploadDate, videoArray }) {
    console.log(videoArray)



    return (
        <header>
            <h1>{title}</h1>
                <small>{views}{" Views | Uploaded "}{uploadDate}</small>
                <Votes upvotes={video.upvotes} downvotes={video.downvotes} />
                <ShowComments videoArray={videoArray} buttonText="Hide Comments"/>
        </header>
    )
}

export default Header