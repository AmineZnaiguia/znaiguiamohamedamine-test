import React, { Component } from "react";
import { Card } from "antd";
import "./card.css"

import { Link, Switch, Route} from 'react-router-dom'

const { Meta } = Card;
export default class cardUsers extends Component {
  
  render() {
    return (
      <div className="card-flex">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
          <h1 className="card-first-name">{this.props.user.name[0]}</h1>
          }
        >
          <Meta title={this.props.user.name} description={this.props.user.phone} />
          <Link to ={ `/${this.props.user.id}`}>
            <button> posts</button>
          </Link>
        </Card>
        
        
      </div>
    );
  }
}
