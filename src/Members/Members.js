import React from "react";

class Members extends React.Component {
  state = {
    memberName: "",
    memberList: [],
    addMembers: false,
    addHobbiesClick: false
    // memberName: "",
    // memberList: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      memberName: "",
      memberList: nextProps.k,
      addMembers: nextProps.l
    });
  }

  onFirstAddHobbies = event => {
    event.preventDefault();
    this.setState({
      addHobbiesClick: true,
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
    const { memberList } = this.state;
    return (
      <div
        className="member-list"
        style={{ display: this.state.addMembers ? "flex" : "none" }}
      >
        <ol>
          {memberList.map((x, i) => (
            <li className="members" key={i}>
              {this.state.addMembers && (
                <form onSubmit={this.onFirstAddHobbies}>
                  <span className="addHobbies">Member : {x.memberName}</span>
                  <input
                    className="btn-addMembers"
                    type="submit"
                    value="Add Hobbies"
                  />
                </form>
              )}
              {/* <Members k={this.state.addHobbiesClick} /> */}

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
export default Members;
