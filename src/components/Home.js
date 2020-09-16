import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{ 
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>
                        <div className="card-content">
                        <span className="card-title"><h5><b>{item.title}</b></h5></span>
                            <p>{item.desc}</p>
                            <p><h5>Price: Rs{item.price}</h5></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center"></h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)