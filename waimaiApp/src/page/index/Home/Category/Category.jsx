import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Category.scss';
import { getHeaderData } from '../../actions/categoryAction';
import jsinvoke from 'component/jsapi';

class Category extends Component {
    constructor(props) {
        super(props);
        this.fetchData();
    }

    fetchData(){
        this.props.dispatch(getHeaderData())
    }
    goCategory(){
        // window.location.href = './category.html';
        //这个点击事件也要用 jsbridge包裹一下 
        jsinvoke({
            cmd: 'openUrl',
            data: {
                url: encodeURIComponent('http://localhost:8080/category.html')
            }
        }, (val)=>{
            console.log(val);
        });

    }
    renderItems(){
        let items = this.props.items;
        // 复制数组防止引用
        let _items = JSON.parse(JSON.stringify(items));
        
        return _items.splice(0,8).map((item, index)=>{
            return (
                <div key={index} className="category-item" onClick={this.goCategory}>
                    <img className="item-icon" src={item.url} />
                    <p className="item-name">{item.name}</p>
                </div>
            )
        });
    }

    render(){
        return (
            <div className="category-content clearfix">{this.renderItems()}</div>
        );
    }
}

export default connect(
    state =>({
        items: state.categoryReducer.items
    })
)(Category);

