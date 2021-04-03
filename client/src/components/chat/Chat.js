import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import WebSocketInstance from "../../websocket.js";
import Typography from '@material-ui/core/Typography'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
    };

    this.waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(
        this.setMessages.bind(this),
        this.addMessage.bind(this)
      );
      WebSocketInstance.fetchMessages(this.props.currentUser);
    });
  }

  waitForSocketConnection(callback) {
    const component = this;
    setTimeout(function () {
      if (WebSocketInstance.state() !== 0) {
        console.log("Connection is made");
        callback();
        return;
      } else {
        component.waitForSocketConnection(callback);
      }
    }, 1000);
  }

  addMessage(message) {
    this.setState({ messages: [...this.state.messages, message] });
  }

  setMessages(messages) {
    this.setState({ messages: messages.reverse() });
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessageHandler = (e) => {
    e.preventDefault();
    const messageObject = {
      from: "admin",
      content: this.state.message,
    };
    WebSocketInstance.newChatMessage(messageObject);
    this.setState({
      message: "",
    });
  };

  getTime = (time) => {
    return Math.round(
      (new Date().getTime() - new Date(time).getTime()) / 60000
    );
  };

  renderMessages = (messages) => {
    const currentUser = "admin";
    return messages.map((message, i) => (
      <div
        key={message.id}
        id={message.id}
        className={`flex my-5 px-10 ${
          message.author === currentUser ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`flex space-x-3 ${
            message.author === currentUser
              ? "flex-row-reverse space-x-reverse"
              : "flex-row"
          }`}
        >
          <Avatar
            src={`https://placedog.net/500?id=${message.author}`}
            alt={`${message.author}-image`}
          />
          <p>
            {message.content}
            <br />
            <small
              className={message.author === currentUser ? "sent" : "replies"}
            >
              {this.getTime(message.timestamp)} minutes ago
            </small>
          </p>
        </div>
      </div>
    ));
  };

  render() {
    const messages = this.state.messages;
    return (

        <main id="all-chats" className="flex items-center h-screen">
          <Typography variant="h5">{this.props.roomName}</Typography>
          <div className="flex flex-col items-center justify-center w-full py-3 h-4/6">
            <div className="flex flex-col flex-grow w-4/5 h-full">
              <ul id="chat-log" className="flex-grow overflow-auto">
                {messages && this.renderMessages(messages)}
              </ul>
              <form onSubmit={this.sendMessageHandler}>
                <TextField
                  id="outlined-basic"
                  onChange={this.messageChangeHandler}
                  label="Send message"
                  variant="standard"
                  value={this.state.message}
                  required
                  type="text"
                  placeholder="Write your message..."
                  className="flex-none text-black"
                  fullWidth
                  margin="normal"
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </main>

    );
  }
}

export default Chat;
