import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'component/common.scss';
import Home from '../Home/Home';
import Loadable from 'react-loadable';
import BottomBar from '../BottomBar/BottomBar';
import { Route, withRouter } from 'react-router-dom';

import Loading from './Loading';

const Order = Loadable({
    loader: () => import('../Order/Order'),
    loading: Loading,
});

const My = Loadable({
    loader: () => import('../My/My'),
    loading: Loading,
});

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Route exact path="/home" component={Home}/>
                <Route path="/order" component={Order}/>
                <Route path="/my" component={My}/>
                <BottomBar />
            </div>
        )
    }
}

// export default connect(mapStateToProps,mapDispatchToProps)(Main);
export default withRouter(connect()(Main));
