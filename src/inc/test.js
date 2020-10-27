import React, { Component } from "react";
import queryString from "query-string";

class test extends Component {
  render() {
    const qry = queryString.parse(this.props.location.search);
    console.log(qry);
    return (
      <div>
        <h2> My name is {qry.name} </h2>
        <h2> I'm {qry.age} years old </h2>
      </div>
    );
  }
}

export default test;
