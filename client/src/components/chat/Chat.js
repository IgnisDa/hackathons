import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import WebSocketInstance from "../../websocket.js";
import Typography from "@material-ui/core/Typography";
import styles from "../../../styles/Chat.module.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      username: "",
    };

    this.waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(
        this.setMessages.bind(this),
        this.addMessage.bind(this)
      );
      WebSocketInstance.fetchMessages(localStorage.getItem("channel"));
    });
  }

  componentDidMount() {
    const username = localStorage.getItem("username");
    if (!username) {
      window.location.replace("/");
      console.log("user not set, please login first");
    } else {
      this.setState({ username: username });
    }
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
      from: this.state.username,
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
    const currentUser = this.state.username;
    return messages.map((message, i) => (
      <div key={message.id} id={message.id} className={`flex flex-col my-5`}>
        <div
          className={`flex flex-col ${
            message.author === currentUser ? "items-end" : "items-start"
          }`}
        >
          <div className="w-[fit-content] px-3 py-1 bg-purple-800 rounded-t-lg ">
            {message.author}
          </div>
          <div
            className={`flex justify-between space-x-2 sm:space-x-3 md:space-x-5 bg-red-900 w-4/5 sm:w-3/5 md:w-2/5 p-3 shadow-2xl ${
              message.author === currentUser
                ? "flex-row-reverse space-x-reverse bg-blue-900 rounded-l-xl"
                : "flex-row bg-indigo-900 rounded-r-xl"
            }`}
          >
            <Avatar
              src={`https://placedog.net/500?id=${message.author}`}
              alt={`${message.author}-image`}
              className="flex-none"
            />
            <div className="flex-grow">
              <div className="text-xs text-justify md:text-base lg:text-lg sm:text-sm">
                {message.content}
              </div>
              <small
                className={message.author === currentUser ? "sent" : "replies"}
              >
                {this.getTime(message.timestamp)} minutes ago
              </small>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    const messages = this.state.messages;
    return (
      <main id="all-chats" className="flex items-center h-screen">
        <div className="flex flex-col items-center justify-center w-full py-3 h-5/6">
          <Typography
            variant="h4"
            className="py-4 tracking-widest underline capitalize"
          >
            {this.props.roomName}
          </Typography>
          <div className="flex flex-col flex-grow w-4/5 h-full">
            <ul
              id="chat-log"
              className={`flex-grow w-full overflow-auto px-3 sm:px-7 md:px-10 ${styles.log}`}
            >
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
