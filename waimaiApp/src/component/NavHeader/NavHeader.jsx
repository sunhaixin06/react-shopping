import React, { Component } from 'react';
import './NavHeader.scss';

class NavHeader extends Component{
    goBack(){
        window.history.back();
    }
    render(){
        return (
            <div className="nav">
                <div onClick={()=>this.goBack()} className="back-icon"></div>
                <h4 className="title">{this.props.title}</h4>
            </div>
        );
    }
}

export default NavHeader;