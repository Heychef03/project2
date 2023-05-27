import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba6fe79075b84f3e9a9fe2fa7f3bd3e6&page=1&pageSize=12`;
    this.setState({loading:true});
   <Spinner/>
    let data = await fetch(url)
    let parseddata = await data.json()
    this.setState({ loading: false });
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults })
  }
  Handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba6fe79075b84f3e9a9fe2fa7f3bd3e6&page=${this.state.page - 1}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url)
    let parseddata = await data.json()
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles
    })
  }

  Handlenextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {

    }
    else {
      console.log("next");
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba6fe79075b84f3e9a9fe2fa7f3bd3e6&page=${this.state.page + 1}&pageSize=12`;
      this.setState({ loading: true });
      let data = await fetch(url)
      let parseddata = await data.json()
      this.setState({ loading: false });
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles

      })
    }
  }

  render() {
    return (
      <div className='container'>
        <h2 className='text-center' style={{ margin: "10px" }}>NewsBite-Top Headlines on {(this.props.category)} </h2>
        {/* <Spinner/> */}
        {!this.state.loading && <div style={{ width: "fit-content", height: "40px", fontSize: "15px", padding: "10px", backgroundColor: "#0d6efd", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", float: "left", borderRadius: "10px" }}>
           <span>Page:{this.state.page} of {Math.ceil(this.state.totalResults / 12)}</span> 
        </div>}
        {this.state.loading && <Spinner />}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button disabled={this.state.page <= 1} className="btn btn-primary me-md-2" type="button" onClick={this.Handleprevclick}>&larr; Previous</button>
            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 12)} className="btn btn-primary" type="button" onClick={this.Handlenextclick}>Next&rarr;</button>
          </div>

        </div>
      </div>

    )
  }
}


export default News
