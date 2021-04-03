import React from "react";
import { useRouter } from 'next/router'

import Chat from "./Chat";
import WebSocketInstance from "../../websocket.js";

export default class App extends React.Component {
  componentDidMount() {

    WebSocketInstance.connect();
    console.log(this.props)
  }

  render() {
    return <Chat roomName={this.props.roomName}/>;
  }
}
