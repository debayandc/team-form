import React, { Component } from "react";
import "./App.css";
import Teams from "./Teams/Teams.js";

class App extends React.Component {
  state = {
    teamName: "",
    teamList: [],
    addTeamClick: false,
    addTeams: false
  };

  // componentDidMount() {
  //   this.setState({
  //     addTeamClick: true
  //   });
  // }
  componentDidUpdate(prevState) {
    if (prevState.addTeams !== this.props.addTeams) {
      this.setState({
        addTeams: false
      });
    }
  }
  onFirstAddTeam = event => {
    event.preventDefault();
    this.setState({
      addTeamClick: true
    });
  };

  handleChangeTeamName = event => {
    this.setState({
      teamName: event.target.value
    });
  };

  onAddTeam = event => {
    event.preventDefault();
    let b = {
      teamName: ""
    };
    if (this.state.teamName !== "") {
      b.teamName = this.state.teamName;
    }
    this.setState({
      teamName: "",
      teamList: [...this.state.teamList, b],
      addTeams: true
    });
  };

  render() {
    return (
      <div className="outer">
        <form onSubmit={this.onFirstAddTeam}>
          <div className="container">
            <span className="addTeam">Add Team</span>
            <input className="submitButton" type="submit" value="+" />
          </div>
        </form>

        <form onSubmit={this.onAddTeam}>
          <div
            className="container"
            style={{ display: this.state.addTeamClick ? "flex" : "none" }}
          >
            <input
              className="teamInput"
              type="text"
              placeholder="Enter Team Name"
              value={this.state.teamName}
              onChange={this.handleChangeTeamName}
            />
            <input className="submitTeam" type="submit" value="Add" />
          </div>
          <Teams k={this.state.teamList} l={this.state.addTeams} />
        </form>
      </div>
    );
  }
}

export default App;
