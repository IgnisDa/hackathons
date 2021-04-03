import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import WebSocketInstance from "../../websocket.js";
import Typography from "@material-ui/core/Typography";
import styles from "../../../styles/Chat.module.css";
import Messages from "./Messages"

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
  chatContainer = React.createRef();

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
    this.scrollToMyRef();
  }

  setMessages(messages) {
    this.setState({ messages: messages.reverse() });
    this.scrollToMyRef();
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
  scrollToMyRef = () => {
    const scroll =
      this.chatContainer.current.scrollHeight -
      this.chatContainer.current.clientHeight;
    this.chatContainer.current.scrollTo(0, scroll);
  };

  render() {
    const messages = this.state.messages;

    return (
      <main id="all-chats" className="flex items-center  h-screen">
        <div className="flex flex-col items-center justify-center w-full py-3 h-5/6">
          <Typography
            variant="h2"
            fontWeight="bold"
            className="py-4 tracking-widest uppercase font-bold"
          >
            {this.props.roomName}
          </Typography>
          <div className="flex flex-col flex-grow w-4/5 h-full">
            <ul
              ref={this.chatContainer}
              id="chat-log"
              className={`flex-grow w-full overflow-auto px-3 sm:px-7 md:px-10 ${styles.scroll}`}
            >
              {messages && <Messages username={this.state.username} messages={messages} />}
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
