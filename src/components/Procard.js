import React, {Component} from 'react';

class Procard extends Component{
    render(){
        return(
            <div className="procard">
                <div className="compdet">
                    <h2>{this.props.title}</h2>
                    <h4 className="second-text">{this.props.desc}</h4>
                    <h4 className="second-text"><a href={this.props.link}>Go to{'>>'}</a></h4>
                </div>
            </div>
        );
    }
}
export default Procard;