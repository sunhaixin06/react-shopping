import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import BottomBar from '../BottomBar/BottomBar';
// import { Route } from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Home/>
                <BottomBar />
            </div>
        )
    }
}

// export default connect(mapStateToProps,mapDispatchToProps)(Main);
export default connect()(Main);
