import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';
import ContentList from './ContentList/ContentList.jsx';

class Home extends Component {

    render(){
        return (
            <div>
                <Header />
                <Category />
                <ContentList />
            </div>
        );
    }
}

export default Home;