import React, { Component } from "react";
import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import Navbar from "components/Navbars/Navbar.js";
import people from "./people";

export default class DashboardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: people["eric"]
    };
  }

  onSearchPerson = name => {
    if (name in people) {
      this.setState({
        person: people[name]
      });
    }
  };

  render() {
    const { person } = this.state;
    return (
      <div>
        <Navbar onSearchPerson={this.onSearchPerson} />
        <UserProfile person={person} />
        <Dashboard person={person} />
      </div>
    );
  }
}
