import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class BookUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      isbn: "",
      publisher: "",
      published_date: "",
      description: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/books/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: res.data.title,
          author: res.data.author,
          isbn: res.data.isbn,
          publisher: res.data.publisher,
          published_date: res.data.published_date,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log("Error in BookUpdate!");
      });
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
      .put(
        "http://localhost:5000/api/books/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/display-book/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in BookUpdate!");
      });
  };

  render() {
    return (
      <div className="BookUpdate">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Book List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">Update Book Details</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
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
                <label htmlFor="isbn">ISBN</label>
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
                <label htmlFor="author">Author</label>
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
                <label htmlFor="description">Description</label>
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
                <label htmlFor="published_date">Published Date</label>
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={this.state.published_date}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher</label>
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control"
                  value={this.state.publisher}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Book
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookUpdate;
