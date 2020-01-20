import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Card from "./component/cardUsers";
import Posts from "./component/posts"
import axios from "axios";
import { match } from "minimatch";
export default class App extends Component {
  state = {
    usertab: []
  };
  componentDidMount = () => {
    this.getAllUsers();
  };
  getAllUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ usertab: res.data }));
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
          exact
            path="/"
            render={() => (
              <div className="card-flex">
                {this.state.usertab.map(el => (
                  <Card  user={el} />
                ))}
              </div>
            )}
          />
          {this.state.usertab.map(user=> <Route path={`/${user.id}`}
        render={()=> <Posts user={user} />} />  )}


          {/* <Route path="/:id"
        render={()=>  <Posts  />} /> */}

        </Switch>
      </div>
    );
  }
}
