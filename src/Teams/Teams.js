import React from "react";
import Member from "../Members/Member";

class Teams extends React.Component {
  state = {
    teamName: "",
    teamList: [],
    addTeams: false,
    addMembersClick: false
    // memberName: "",
    // memberList: []
  };

  static getDerivedStateFromProps(props, state) {
    if (props.l !== state.addTeams) {
      return {
        teamList: props.k,
        addTeams: props.l
      };
    }
    return null;
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     teamName: "",
  //     teamList: nextProps.k,
  //     addTeams: nextProps.l
  //   });
  // }

  onFirstAddMembers = event => {
    event.preventDefault();
    this.setState({
      addMembersClick: true,
      addTeams: false
    });
  };

  // handleChangeMemberName = e => {
  //   this.setState({
  //     memberName: e.target.value
  //   });
  // };

  // onAddMembers = e => {
  //   e.preventDefault();
  //   let b = {
  //     memberName: ""
  //   };
  //   if (this.state.memberName !== "") {
  //     b.memberName = this.state.memberName;
  //   }
  //   this.setState({
  //     memberName: "",
  //     memberList: [...this.state.memberList, b],
  //     addMembers: true
  //   });
  // };

  render() {
    const { teamList } = this.state;
    return (
      <div
        className="team-list"
        style={{ display: this.state.addTeams ? "flex" : "none" }}
      >
        <ol>
          {teamList.map((x, i) => (
            <li className="teams" key={i}>
              {this.state.addTeams && (
                <form onSubmit={this.onFirstAddMembers}>
                  <span className="addMembers">Team : {x.teamName}</span>
                  <input
                    className="btn-addMembers"
                    type="submit"
                    value="Add Members"
                  />
                </form>
              )}
              <Member k={this.state.addMembersClick} />
              {/* <form onSubmit={this.onAddMembers}>
                <div
                  className="container"
                  style={{
                    display: this.state.addMembersClick ? "flex" : "none"
                  }}
                >
                  <input
                    className="memberInput"
                    type="text"
                    placeholder="Enter Member Name"
                    value={this.state.memberName}
                    onChange={this.handleChangeMemberName}
                  />
                  <input className="submitMember" type="submit" value="Add" />
                </div>
                <Teams k={this.state.teamList} l={this.state.addTeams} />
              </form> */}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default Teams;
