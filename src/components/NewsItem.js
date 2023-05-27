
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author, date, source } = this.props;
    return (

      <div className='container'>
        <div style={{ width: "fit-content", height: "40px", fontSize: "15px", padding: "10px", backgroundColor: "#0d6efd", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", float: "right", borderRadius: "50px" }}>
          <span>{source}</span>
        </div>
        <div className="card" style={{ width: "20rem", height: "500px", overflowX: "hidden", marginBottom: "7%", borderRadius:"0" }}>
          <img src={!imageUrl?"https://www.techexplorist.com/wp-content/uploads/2023/05/density-wave.jpg":imageUrl} className="card-img-top" style={{borderRadius:"0"}} alt="..." />
          <div className="card-body"><span className="position-absolute top-0 start-0 translate-middle  badge badge-circle badge-danger">5</span>
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()},  Source:{source}</small></p>
            {/* </div> */}
            <a href={newsurl} className="btn btn-primary">Read More</a>

          </div>
        </div>


      </div>
    )
  }
}


export default NewsItem

