import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class NewBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      publisher: this.state.publisher,
      published_date: this.state.published_date,
      description: this.state.description,
    };

    axios
      .post("http://localhost:5000/api/books", data)
      .then((res) => {
        this.setState({
          title: "",
          author: "",
          isbn: "",
          publisher: "",
          published_date: "",
          description: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in NewBook!");
      });
  };

  render() {
    return (
      <div className="NewBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">Create new book</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Book Title"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    className="form-control"
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Describe this book"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="published date"
                    name="published_date"
                    className="form-control"
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Publisher of book"
                    name="publisher"
                    className="form-control"
                    value={this.state.publisher}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBook;
