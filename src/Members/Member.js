import React from "react";
import Members from "./Members";

class Member extends React.Component {
  state = {
    addMembers: false,
    addMembersClick: false,
    memberName: "",
    memberList: []
  };

  static getDerivedStateFromProps(props, state) {
    if (props.l !== state.addMembersClick) {
      return {
        addMembersClick: props.k
      };
    }
    return null;
  }
  //   componentWillReceiveProps(nextProps) {
  //     this.setState({
  //       memberName: "",
  //       memberList: [],
  //       addMembersClick: nextProps.k
  //       //   addTeams: nextProps.l
  //     });
  //   }

  handleChangeMemberName = e => {
    this.setState({
      memberName: e.target.value
    });
  };

  onAddMembers = e => {
    e.preventDefault();
    let b = {
      memberName: ""
    };
    if (this.state.memberName !== "") {
      b.memberName = this.state.memberName;
    }
    this.setState({
      memberName: "",
      memberList: [...this.state.memberList, b],
      addMembers: true
    });
  };

  render() {
    return (
      //   <div
      //     className="team-list"
      //     style={{ display: this.state.addTeams ? "flex" : "none" }}
      //   >
      //     <ol>
      //       {teamList.map((x, i) => (
      //         <li className="teams" key={i}>
      //           <form onSubmit={this.onFirstAddMembers}>
      //             <span className="addMembers">Team : {x.teamName}</span>
      //             <input
      //               className="btn-addMembers"
      //               type="submit"
      //               value="Add Members"
      //             />
      //           </form>
      <form onSubmit={this.onAddMembers}>
        <div
          className="container"
          style={{
            display: this.state.addMembersClick /*&& !this.state.addTeams*/
              ? "flex"
              : "none"
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
        <Members k={this.state.memberList} l={this.state.addMembers} />
      </form>
    );
  }
}

export default Member;
