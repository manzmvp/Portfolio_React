import React, {Component} from 'react';
import portrait from '../images/portrait.jpeg';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component{
    render(){
        return(
            <div className="condiv home">
                <img src={portrait} className="portrait" alt="Portrait"></img>
                <ReactTypingEffect className="typingeffect" text={['Hey there! This is Manoj Kumar || Software Developer']} speed = {80} eraseDelay={700} />
            </div>
            
        );
    }
}
export default Home;