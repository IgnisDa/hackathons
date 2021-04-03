import React from "react";
import Layout from "../src/components/Layout";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default function ConnectView() {
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
              type="text"
              placeholder="Enter your username"
              className="flex-none text-black"
              fullWidth
              margin="normal"
              autoComplete="off"
            />
          </form>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
