import React from "react";
import "./styles.css";
// import { checkPropTypes } from "prop-types";

export default function App() {
  return (
    <>
      <div className="App">
        <DisplayLabel value="Username " />
        <DisplayInput type="text" /> <br />
        <br />
        <DisplayLabel value="Password " />
        <DisplayInput type="password" />
        <br />
        <br />
        <DisplayButton />
      </div>
      <br />
      <hr />
      <div className="TextBox">
        <Input />
      </div>
    </>
  );
}

function DisplayLabel(props) {
  return <label>{props.value}</label>;
}

function DisplayInput(props) {
  return <input type={props.type} />;
}

function DisplayButton(props) {
  return <button onClick={() => alert("login successful")}>Submit</button>;
}

class Input extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: ""
    };
  }

  input = event => {
    this.setState({ username: event.target.value });
  };

  clear = () => {
    this.setState({ username: "" });
  };

  render() {
    const enable = this.state.username.length > 0;
    return (
      <div>
        <input type="text" onChange={this.input} value={this.state.username} />
        <br />
        <br />
        <button disabled={!enable} onClick={() => alert(this.state.username)}>
          Submit
        </button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}
