/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Filters from "./components/Filters";
import API from "./utils/API";
import Sort from "./components/Sort";

class SearchEmployees extends Component {
  state = {
    users: [],
    search: "",
  };

  componentDidMount() {
    this.searchUsers();
  }
  searchUsers() {
    API.searchUsers()
      .then((res) => this.setState({ users: res.data.results }))

      .catch((err) => console.log(err));
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.users);
    const result = this.state.users.filter(
      (user) =>
        user.name.first.toLowerCase() === this.state.search.toLowerCase()
    );
    this.setState({ users: result });

    console.log(result);
  };
  sortUsersAsc = () => {
    const ascendingList = this.state.users.sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    this.setState({ users: ascendingList });
  };
  sortUsersDesc = () => {
    const descendingList = this.state.users.sort((a, b) =>
      a.name.last < b.name.last ? 1 : -1
    );
    this.setState({ users: descendingList });
  };

  render() {
    return (
      <div className="container">
        <Sort />
        <Filters
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />{" "}
        <Header />
        <Card users={this.state.users} />
      </div>
    );
  }
}
export default SearchEmployees;
