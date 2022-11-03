import React, { Component } from "react";
import FormProper from './FormProper'
import FormDisplay from "./FormDisplay";
import NavigationBar from "./NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import Movie from "./Movie";

class App extends Component {
    state = 
    {
        personData: []
    }
    addData = (user) => 
    {
        let personData = [...this.state.personData, user]
        console.log(personData)
        this.setState(
            {
                personData
            })
    }
    render() 
    {
        return(
            <>  
                <NavigationBar />
                <Container>
                    <Movie />
                </Container>
                <Container>
                    <FormProper addData={this.addData} />
                </Container>
                <Container>
                    <FormDisplay personData={this.state.personData} />
                </Container>
            </>
    )}
}

export default App