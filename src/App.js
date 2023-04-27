import "./App.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default function App(){
  //apikey = process.env.REACT_NEWS_APP_API;
  const apikey = "726125710c4f4f55aa7d18efaaff6711";
  const [progress, setProgress] = useState(0);
    return (
      <div className="main">
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="General"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="Business"
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="Entertainment"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="Science"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="Health"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="Sports"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="Technology"
                  category="Technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
}

/* 
  Class Based Component
  ---------------------
  class App extends Components {
    render(){
      return(

      )
    }
  }
  render Method -> processes the JSX and display on the DOM
   <Router>
      
          <Routes>
         
            <Route exact path = '/' element = {<News setProgress={this.setProgress}  category = "general"/>} />
            <Route exact path = '/business' element = {<News setProgress={this.setProgress}  category = "business"/>} />
            <Route exact path = '/entertainment' element = {<News setProgress={this.setProgress}  category = "entertainment"/>} />
            <Route exact path = '/science' element = {<News setProgress={this.setProgress}  category = "science"/>}/>
            <Route exact path = '/health' element = {<News setProgress={this.setProgress}  category = "health"/>} />
            <Route exact path = '/sports' element = {<News setProgress={this.setProgress}  category = "sports"/>} />
            <Route exact path = '/technology' element = {<News setProgress={this.setProgress}  category = "technology"/>} />
          </Routes>
        </Router>




        ## Loading bar to be included later on



*/
