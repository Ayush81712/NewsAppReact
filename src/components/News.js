import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loder from './Loder';
import PropTypes from 'prop-types';
import '../loder.css'


export class News extends Component {
    static defaulprops={
        country:'in',
        pageSize:6,
        category:'general',
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }

    article = []
    constructor(props) {
        super(props);
        this.state = {
            article: this.article,
            loading: true,
            page:1
            
        }
        document.title = `${this.props.category} - NewsMonkey`
    }
    // api="0000d2b2bf53422a9bb15b535e54f1e2";
    // api="d0dd7c7bed0840349bd9e4d19826a5dc";
    api="8645bedffa91448f81a138f8d6ab6fa4";
    // api="d093053d72bc40248998159804e0e67d";

    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ article: parsedata.articles,
        totalResult:parsedata.totaleResult,
        loading:false })
        this.props.setProgress(100)
    }
    handlePrevious =async()=>{
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.api}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ article: parsedata.articles,page:this.state.page - 1,loading:false})
        this.props.setProgress(100)
    }
    handleNext =async()=>{
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ article: parsedata.articles,page:this.state.page + 1,loading:false })
        this.props.setProgress(100)
    }
    

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{margin:"50px 300px"}}>{this.props.category} ->NEWS TIME</h2>
                {this.state.loading && <Loder/>}

                <div className='row'>
                    {this.state.article.map((element) => {

                        return <div className="col-md-4 " key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>

                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button className="btn btn-dark mx-3" onClick={this.handlePrevious} disabled={this.state.page<=1}>&larr;previous</button>
                    <button className="btn btn-dark mx-3" onClick={this.handleNext} disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)}>next&rarr;</button>
                    </div>






            </div>
        )
    }
}

export default News
