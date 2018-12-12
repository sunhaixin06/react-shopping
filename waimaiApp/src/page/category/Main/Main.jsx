import 'component/common.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from 'component/NavHeader/NavHeader';
import Header from '../Header/Header';
import ContentList from '../ContentList/ContentList';

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className="category">
                <NavHeader title="分类"/> {/*分类页面的 title*/}
                <Header /> {/*分类页面的 header*/}
                <ContentList /> {/*分类页面的 商品展示列表*/}
            </div>
        );
    }
}

export default connect()(Main);