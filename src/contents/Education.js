import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title = "Bachelor of Engineering" where="Velammal College of Engineeing and Technology" from="2018" to="Present" />
                <Widecard title = "SSLC | HSC" where="Velammal Bodhi Campus" from="2015" to="2018" />
            
            </div>
        );
    }
}

export default Education;