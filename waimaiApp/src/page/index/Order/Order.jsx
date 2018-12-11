import React, { Component } from 'react';
import './Order.scss';
import { connect } from 'react-redux';
import { getOrderData } from '../actions/orderAction';
import ScrollView from 'component/ScrollView/ScrollView.jsx';
import ListItem from './ListItem/ListItem';

class Order extends Component {
    constructor(props){
        super(props);
        // 标示分页
        this.page = 0;
        // 是否还可以滚动加载
        this.state = {
            isend: false
        };
        this.fetchData(this.page);
    }

    loadPage(){
        this.page++;
        if (this.page > 3) {
            this.setState({
                isend: true
            });
        } else {
            this.fetchData(this.page);
        }
    }

    fetchData(page){
        this.props.dispatch(getOrderData(page));
    }
    renderList(){
        let list = this.props.list;

        return list.map((item, index)=>{
            return <ListItem itemData={item} key={index}></ListItem>
        });
    }
    render(){
        return (
            <div className="order">
                <div className="header">订单</div>
                <ScrollView dis="order" loadCallback={this.loadPage.bind(this)} isend={this.state.isend}>
                    <div className="order-list">{this.renderList()}</div>
                </ScrollView>
            </div>
        );
    }
}
export default connect(
    state => ({
        list: state.orderReducer.list
    })
)(Order);