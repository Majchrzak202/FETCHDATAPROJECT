import React from "react";
import AddMovie from "./AddMovie";

const PostMovie = ({addMovieHandler}) => {
    return (<div>
        <AddMovie addMovieHandler={addMovieHandler}/>
    </div>)
}

export default PostMovie; 