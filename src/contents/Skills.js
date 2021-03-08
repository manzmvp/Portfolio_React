import React, {Component} from 'react';

class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            'Skills': ['Django', 'Html', 'Css', 'Python', 'Cpp', 'Figma', 'Data Structures', 'Postman', 'Git']
        };
    }
    render(){
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                {this.state.Skills.map((value)=>{
                return <li>{value}</li>
                })}
                </ul>
            </div>

        );
    }
}

export default Skills;