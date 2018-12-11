import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContentList.scss';

class ContentList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                
            </div>
        );
    }
}

export default connect()(ContentList);