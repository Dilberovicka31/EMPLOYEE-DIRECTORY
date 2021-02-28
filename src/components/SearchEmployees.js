import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class SearchEmployees extends Component {
  state = {
    result: {},
    search: "",
  };

  searchEmpl = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.searchEmpl(this.state.search);
  };

  render() {
    return (
      <SearchForm
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}
export default SearchEmployees;
