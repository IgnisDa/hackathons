import React from "react";
import Layout from "../src/components/Layout";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import fetch from "node-fetch";
import { HOST_URL } from "../settings";
import axios from "axios";

export default class ConnectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      interests: [],
      allInterests: [],
    };
  }

  async componentDidMount() {
    const interests = await fetch(
      `${HOST_URL}/chat/interests/`
    ).then((response) => response.json());
    console.log();
    this.setState({ allInterests: interests });
  }

  handleInputChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleSelect(index) {
    const interest = this.state.allInterests[index];
    if (!this.state.interests.includes(interest)) {
      this.setState((state) => ({
        interests: [...state.interests, interest],
      }));
    } else {
      let arr = this.state.interests;
      arr = arr.filter((item) => item !== interest);
      this.setState(() => ({
        interests: arr,
      }));
    }
  }

  submitInterests = () => {
    const interests = this.state.interests;
    if (!this.state.username) {
      alert("Please enter a username first");
      return;
    }
    if (this.state.interests.length < 1) {
      alert("You need to select at least one interest");
      return;
    }
    axios
      .post(`${HOST_URL}/chat/induct/`, {
        interests: interests,
      })
      .then((res) => {
        console.log(res);
      });
    localStorage.setItem("username", this.state.username);
  };

  render() {
    return (
      <React.Fragment>
        <Layout short>
          <Container>
            <form>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="standard"
                required
                value={this.username}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter your username"
                className="flex-none text-black"
                fullWidth
                margin="normal"
                autoComplete="off"
              />
            </form>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {this.state.allInterests.map((element, index) => (
                <div
                  data-attribute={`${element}`}
                  key={index}
                  id={`choice-${index}`}
                  onClick={() => this.handleSelect(index)}
                  className={`cursor-pointer border ${
                    this.state.interests.includes(element)
                      ? "text-green-300"
                      : "text-red-900"
                  }`}
                >
                  {element}
                </div>
              ))}
            </div>
            <Button onClick={this.submitInterests}>Next</Button>
          </Container>
        </Layout>
      </React.Fragment>
    );
  }
}
