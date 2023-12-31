import './App.css';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React, { Component } from 'react'
import News from './components/News';
// import Loder from './components/Loder';

export default class App extends Component {
  d="ddr";

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
      <Router>
          
          <Navbar />

          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height='5px'
            loaderSpeed='10000ms'
          />

          <Routes>
            <Route exact path="/" element={<News setProgress= {this.setProgress}  key="general" pageSize={6} country="in" category="general" />}></Route>
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={6} country="in" category="Business" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country="in" category="health" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="technology" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={6} country="in" category="science" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={6} country="in" category="entertainment" />}></Route>
          </Routes>

        </Router>
      {/* <News setProgress={setProgress} pageSize={18} country="in" category="science"/> */}
      </>
    )
  }
}
