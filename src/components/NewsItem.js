import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageurl,newsurl,author,date,source}=this.props;
        return (
            <div>
                <div className="card my-3" >
                    <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{zIndex:'1', marginLeft:'-50%',marginTop:'-10px'}}>{source}
                                <span className='visually-hidden-'>hello</span>
                            </span>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-success">By {author?author:"unknown"}  on {new Date(date).toGMTString()}</small></p>
                            <a href={newsurl} className="btn btn-sm btn-primary">More News</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
