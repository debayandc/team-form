import React from "react";

class Teams extends React.Component {
  state = {
    teamName: "",
    teamList: [],
    addTeams: false
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      teamName: "",
      teamList: nextProps.k,
      addTeams: nextProps.l
    });
  }

  render() {
    const { teamList } = this.state;
    return (
      <div
        className="team-list"
        style={{ display: this.state.addTeams ? "flex" : "none" }}
      >
        <ul>
          {teamList.map((x, i) => (
            <li key={i}>
              <form>
                {x.teamName}
                <input className="submitButton" type="submit" value="+" />
              </form>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Teams;
