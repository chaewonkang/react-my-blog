import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "chaewon",
      test: "",
    };
  }

  componentDidMount() {
    this._dbTest();
  }

  _dbTest = async () => {
    const res = await axios.get("/api/test");
    console.log(res.data);
  };

  /* axios로 /api/host에 get 요청 보내고, chaewon 으로 응답 결과 받기 */
  /* 응답 받은 chaewon 값은 setState 함수를 통해 host state에 할당되고 화면 리렌더링 */
  //   _getHost = async () => {
  //     const res = await axios.get("/api/host");
  //     this.setState({ host: res.data.host });
  //   };

  render() {
    return (
      <div className="App">
        <h3>
          {" "}
          Welcome to <u> {this.state.host} </u> Blog!{" "}
        </h3>
      </div>
    );
  }
}

export default App;
