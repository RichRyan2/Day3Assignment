//api source: https://fake-movie-database-api.herokuapp.com/api?s=star%20wars "Search"
//properties: imdbID, Title, Year, Poster(img link)

import React, {Component} from 'react'
import axios from "axios"
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class MovieData extends Component 
{
    state = 
    {
        Search: []
    }

    componentDidMount = () => 
    {
        axios.get('https://fake-movie-database-api.herokuapp.com/api?s=star%20wars').then((res) => 
        {
            const { Search } = res.data
            this.setState(
            {
                Search: Search.slice(1, 6)
            })
        }).catch((err) => console.log(err))
    }

    render() 
    {
        const SearchList = this.state.Search.map((movie => {
                return(
                    <Card style={{ width: '14rem'}}>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Title style={{ textAlign: 'center', padding: '5px'}}>{movie.Title} ({movie.Year})</Card.Title>
                    </Card>
                )
            }));
        return(
            <>
                {SearchList}
            </>
        )
    }
}

export default MovieData