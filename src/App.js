/* eslint-disable no-self-compare */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Filters from "./components/Filters";
import API from "./utils/API";
import Sort from "./components/Sort";
import Container from "./components/Container";

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
   sortAscending = (e) =>{
     const {name,value} = e.target;
     this.setState({[name]:value})
     const sortingAs = this.state.users.sort((a,b) =>
     (a.name.first > a.name.first) ? 1: -1)
     this.setState({users:sortingAs})
   }
  
   sortDescending = (e) =>{
    const {name,value} = e.target;
    this.setState({[name]:value})
    const sortingDes = this.state.users.sort((a,b) =>
    (a.name.first > a.name.first) ? 1: -1)
    this.setState({users:sortingDes})
  }
  


  render() {
    return (
      <Container>
        <Sort
        sortAscending= {this.sortAscending}
        sortDescending ={this.sortDescending}
        />
        <Filters
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />{" "}
        <Header />
        <Card users={this.state.users} />
      </Container>
    );
  }
}
export default SearchEmployees;
