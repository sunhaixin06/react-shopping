import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContentList.scss';
import ScrollView from 'component/ScrollView/ScrollView.jsx';
import ListItem from 'component/ListItem/ListItem.jsx';
import { getListData } from '../../actions/contentListAction';

class ContentList extends Component{
    constructor(props) {
        super(props);
        this.page = 0;
        this.fetchData(this.page);
        this.state = {
            isend: false
        };
    }
    onLoadPage(){
        this.page++;
        // 最多滚动3页3次
        if (this.page > 3) {
            this.setState({
                isend: true
            });
        } else {
            this.fetchData(this.page);
        }
    }

    fetchData(page){
        this.props.dispatch(getListData(page));
        
    }

    renderItems(){
        let list = this.props.list;
        return list.map((item, index)=>{
            return <ListItem key={index} itemData={item}></ListItem>
        });
    }
    
    render(){
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <ScrollView dis="content" loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {this.renderItems()}
                </ScrollView>
            </div>
        );
    }
}

export default connect(
    state =>({
        list: state.contentListReducer.list
    })
)(ContentList);