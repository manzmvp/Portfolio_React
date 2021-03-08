import React, {Component} from 'react';
import portrait from '../images/portrait.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';

class Home extends Component{
    render(){
        return(
            <div className="condiv home">
                <img src={portrait} className="portrait" alt="Portrait"></img>
                <ReactTypingEffect className="typingeffect" text={['Hi, ThIs Is MaNoJ']} speed = {100} eraseDelay={700} />
                <Social />
            </div>
            
        );
    }
}
export default Home;