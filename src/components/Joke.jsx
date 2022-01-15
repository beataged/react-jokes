import React from "react";
import {Link} from "react-router-dom";
let favouritesList = [];

class Joke extends React.Component {

  constructor() {
    super();
    this.handleAddFavourites = this.handleAddFavourites.bind(this);
  }

  handleAddFavourites(){
    let obj = {};
    obj["id"]= this.props.id;
    obj["joke"]=this.props.title;
    obj["categories"]=[];
    favouritesList.push(obj)
    localStorage.setItem('favouritesJokes',JSON.stringify(favouritesList))
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-muted">{this.props.id}</h5>
          <p className="card-text">{this.props.title}</p>
          <p>{this.props.status}</p>
          {this.props.status === "notSaved"? (<Link to="/favourites" className="btn btn-primary" onClick={this.handleAddFavourites}> Add to favorites</Link>):null} 
        </div>
      </div>
    );
  }
}

export default Joke;
