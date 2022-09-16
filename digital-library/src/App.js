import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NewBook from "./components/NewBook";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import BookUpdate from "./components/BookUpdate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/create-book" element={<NewBook />} />
        <Route path="/book-edit/:id" element={<BookUpdate />} />
        <Route path="/display-book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
