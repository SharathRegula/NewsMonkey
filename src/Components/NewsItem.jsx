import React, {Component} from 'react'

export  class NewsItem extends Component{
  constructor(){
  super();
  this.state={
       
  }
}
render(){
  let {urlToImage,title,description}=this.props;
  return(
  <>
  <div className="card" style={{width:"18rem"}}>
  <img src={urlToImage} className="card-img-top" alt="Image Not found"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,75)}...</h5>
    <p className="card-text">{description.slice(0,200)}...</p>
    <a href="/" className="btn-primary btn-sm">..Read More</a>
  </div>
</div>
  </>)
} 
}
export default NewsItem