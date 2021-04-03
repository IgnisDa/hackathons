import React from "react";
import Layout from "../src/components/Layout";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default class ConnectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      interests: [],
      allInterests: [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth",
      ],
    };
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {this.state.allInterests.map((element, index) => (
                <div
                  data-attribute={`${element}`}
                  key={index}
                  id={`choice-${index}`}
                  onClick={() => this.handleSelect(index)}
                  className={
                    this.state.interests.includes(element)
                      ? "text-green-300"
                      : "text-red-900"
                  }
                >
                  {element}
                </div>
              ))}
            </div>
          </Container>
        </Layout>
      </React.Fragment>
    );
  }
}
