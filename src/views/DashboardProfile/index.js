import React, { Component } from "react";
import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import Navbar from "components/Navbars/Navbar.js";
import people from "./people";

export default class DashboardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: people["guilherme"]
    };
  }

  onSearchPerson = name => {
    if (name in people) {
      console.log(name);
      this.setState({
        person: people[name]
      });
    }
  };

  render() {
    const { person } = this.state;
    return (
      <div>
        <div style={{ marginBottom: "2.5%" }}>
          <Navbar onSearchPerson={this.onSearchPerson} />
        </div>
        <UserProfile person={person} />
        <Dashboard person={person} />
      </div>
    );
  }
}
