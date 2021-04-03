import React from "react";
import clsx from "clsx";
import Layout from "../src/components/Layout";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'


export default class ConnectView extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        username: "",
        interests: [],

      }
    }

    handleInputChange = (event) =>{
      this.setState({
        username: event.target.value
      })
    }
    handleSelect = (e) => {
      if (!this.state.interests.includes(e.target.dataset.value)){
        this.setState(state => ({
          interests: [...state.interests, e.target.dataset.value],
        }))
      }
    }

    render(){
      var allInterests = ["1", "2", "3"]
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
            <FormControl required component="fieldset" >
              <FormLabel component="legend">Pick two</FormLabel>
              <FormGroup>
                {allInterests.map((i) => {
                  <FormControlLabel
                    control={<Checkbox checked={this.state.interests.includes(i)} key={i} onChange={this.handleSelect} data-value={i} name="gilad" />}
                    label="Gilad Gray"
                  />
                })}

              </FormGroup>

            </FormControl>
          </Container>
        </Layout>
      </React.Fragment>
    );
  }
}
