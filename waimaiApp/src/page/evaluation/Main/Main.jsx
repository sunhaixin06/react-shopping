import 'component/common.scss'; import './Main.scss';
import React, { Component } from 'react';
import NavHeader from 'component/NavHeader/NavHeader';

class Main extends Component{
    constructor(props){
        super(props);
         // 最多可输入的字符数
        this.maxCount = 140;
        this.state = {
             // 还剩多少字符可输入
             count: this.maxCount,
             // 用户当前点击的星号码
             startIndex: 0
        }
    }

    componentDidMount(){
        this.commentInput.addEventListener('compositionstart', ()=>{
            this.chineseInputing = true;
        });
        this.commentInput.addEventListener('compositionend', (e)=>{
            this.chineseInputing = false;
            this.onIuput(e.target.value);
        });
    }

    onIuput(value){// 用户输入回调
        let num = value.length;
        if (!this.chineseInputing) {
            this.setState({
                count: this.maxCount - num
            });
        }
    }

    doEva(i){// 点击评分
        this.setState({
            startIndex: i + 1
        });
    }
    
    renderStar(){// 渲染评分用的星
        let arr = [];
        for (let i = 0 ; i<5 ;i++) {
            let cls = i >= this.state.startIndex ? "star-item" : "star-item light";
            arr.push(<div onClick={()=>this.doEva(i)} key={i} className={cls}></div>);
        }

        return arr;
    }
    render(){
        return(
            <div className="content">
                <NavHeader title="评价"/>
                <div className="eva-content">
                     <div className="star-area">
                         {this.renderStar()}
                     </div>
                     <div className="comment">
                            <textarea ref={(ref)=>{this.commentInput = ref}} onChange={(e)=>this.onIuput(e.target.value)} minLength="140" placeholder="亲，菜品的口味如何，商家的服务是否周到?" className="comment-input"></textarea>
                            <span className="count">{this.state.count}</span>
                        </div>
                        <p className="one-line product-name">+厚切鸡排 香辣口水鸡饭. 中辣</p>
                    </div>
                    <div className="submit">提交评价</div>
            </div>
        )
    }
}

export default Main;