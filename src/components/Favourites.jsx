import React from "react";
import Joke from "./Joke";

class Favourites extends React.Component {
  constructor(){
    super();
    this.state={
      savedList: []
    }
  }

  componentDidMount(){
    if(localStorage.length){
      this.setState((state)=>({
        savedList: state.savedList.concat(JSON.parse(localStorage.getItem(('favouritesJokes'))))
      }))
    }
  }

  render() {
    console.log(this.state.savedList)
    if(this.state.savedList.length){
    return (
      <div className="favourites">
        <h1>Favourites list</h1>
        <div className="row">
          {this.state.savedList.map((j)=><Joke id={j.id} title={j.joke}/>)}
        </div>
      </div>
    );
    }else{
      return (
        <div className="favourites">
          <h1>iSsaugotu joku nera</h1>
        </div>
      );
    }
  }
}

export default Favourites;
