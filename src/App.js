import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <Router>
        <div> 
          <NavBar />
          <Routes>
            <Route
              excat
              path="/"
              element={
                <News
                  key={"general"}
                  pageSize={this.pageSize}
                  country={"us"}
                  category={""}
                  // apiKey={"f463f408e3304af8bd813b19d3878f5f"}
                  //apiKey={"5523246cd08b4813b51547829f40d736"}
                  apiKey={"29bce4b649ba457e8ac35bd716d97a88"}
                />
              }
            ></Route>
            <Route
              excat
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"business"}
                  // apiKey={"f463f408e3304af8bd813b19d3878f5f"}
                  //apiKey={"5523246cd08b4813b51547829f40d736"}
                  apiKey={"29bce4b649ba457e8ac35bd716d97a88"}
                />
              }
            ></Route>
            <Route
              excat
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  key={"entertainment"}
                  country={"us"}
                  category={"entertainment"}
                  // apiKey={"f463f408e3304af8bd813b19d3878f5f"}
                  //apiKey={"5523246cd08b4813b51547829f40d736"}
                  apiKey={"29bce4b649ba457e8ac35bd716d97a88"}
                />
              }
            ></Route>
            <Route
              excat
              path="/health"
              key={"health"}
              element={
                <News
                  pageSize={this.pageSize}
                  key={"health"}
                  country={"us"}
                  category={"health"}
                  // apiKey={"f463f408e3304af8bd813b19d3878f5f"}
                  //apiKey={"5523246cd08b4813b51547829f40d736"}
                  apiKey={"29bce4b649ba457e8ac35bd716d97a88"}
                />
              }
            ></Route>
            <Route
              excat
              path="/science"
              key={"science"}
              element={
                <News
                  pageSize={this.pageSize}
                  key={"science"}
                  country={"us"}
                  category={"science"}
                  // apiKey={"f463f408e3304af8bd813b19d3878f5f"}
                  //apiKey={"5523246cd08b4813b51547829f40d736"}
                  apiKey={"29bce4b649ba457e8ac35bd716d97a88"}
                />
              }
            ></Route>
            <Route
              excat
              path="/sports"
              element={
                <News
                  pageSize={this.pageSize}
                  key={"sports"}
                  country={"us"}
                  category={"sports"}
                  // apiKey={"f463f408e3304af8bd813b19d3878f5f"}
                  //apiKey={"5523246cd08b4813b51547829f40d736"}
                  apiKey={"29bce4b649ba457e8ac35bd716d97a88"}
                />
              }
            ></Route>
            <Route
              excat
              path="/technology"
              element={
                <News
                  pageSize={this.pageSize}
                  key={"technology"}
                  country={"us"}
                  category={"technology"}
                  // apiKey={"f463f408e3304af8bd813b19d3878f5f"}
                  //apiKey={"5523246cd08b4813b51547829f40d736"}
                  apiKey={"29bce4b649ba457e8ac35bd716d97a88"}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
