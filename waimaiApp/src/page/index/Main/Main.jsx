import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BottomBar from '../BottomBar/BottomBar.jsx';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <BottomBar />
            </div>
        )
    }
}

// export default connect(mapStateToProps,mapDispatchToProps)(Main);
export default connect()(Main);
