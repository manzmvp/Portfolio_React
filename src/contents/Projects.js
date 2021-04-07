import React, {Component} from 'react';
import Procard from '../components/Procard';

class Projects extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">Personal Projects</h1>
                <Procard title = "Sudoku-Solver" desc="A Sudoku game in Javascript(AI)" link="https://manzmvp.github.io/js_sudoku_solver/" />
                <Procard title = "TN Election Candidates" desc="A React application for finding the candidates at different constituencies" link="https://tn-candidates-list.netlify.app/#/home"/>
                <Procard title = "Bug Tracker" desc="A Project bug tracker made with Vanilla JS" link="https://manzmvp.github.io/JSBug_tracking_system/" />
                <Procard title = "Other Projects" desc="Check out my Github" link="https://github.com/manzmvp" />
                <h1 className="subtopic">My Work at Monetary Trade Labs</h1>
                <Procard title = "Stock API" desc="An API that lets the user to place orders and take positions" link="http://www.mtradelabs.com/home" />


            </div>
        );
    }
}

export default Projects;