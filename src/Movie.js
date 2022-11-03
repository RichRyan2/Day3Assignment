import React, { Component } from "react";
import MovieData from "./MovieData";
import {Stack} from 'react-bootstrap'

class Movie extends Component {
    render() 
    {
        return(
            <Stack direction="horizontal" gap={3}>
                <MovieData />
            </Stack>
        )   
    }
}

export default Movie