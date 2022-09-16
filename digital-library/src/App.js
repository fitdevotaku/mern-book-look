import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NewBook from "./components/NewBook";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import BookUpdate from "./components/BookUpdate";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={BookList} />
          <Route path="/create-book" component={NewBook} />
          <Route path="/book-edit/:id" component={BookUpdate} />
          <Route path="/display-book/:id" component={BookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
