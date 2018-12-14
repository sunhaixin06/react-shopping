import React, { Component } from 'react';
import './NavHeader.scss';
import jsinvoke from 'component/jsapi';

class NavHeader extends Component{
    goBack(){
        // window.history.back();
        jsinvoke({
            cmd: 'goBack',
            data: {}
        });
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