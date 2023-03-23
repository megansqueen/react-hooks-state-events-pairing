import React from "react";
import video from "../data/video.js";
import Header from "./Header.js";

function App() {
  const videoArray = video.comments.map(comment => {
    const container = [];

    container.id = comment.user;
    container.comment = comment.comment
    return container
  })
  console.log(videoArray)
  return (
    
    <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
        />
        <Header videoArray={videoArray} title={video.title} views={video.views} uploadDate={video.createdAt}/>
    </div>
  );
}

export default App;
