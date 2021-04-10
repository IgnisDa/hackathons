import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export default function Message(props) {
  const currentUser = props.username;
  const getTime = (time) => {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");
    return timeAgo.format(new Date(time));
  };

  return props.messages.map((message) => (
    <div key={message.id} id={message.id} className={`flex flex-col my-5`}>
      <div
        className={`flex flex-col ${
          message.author === currentUser ? "items-end" : "items-start"
        }`}
      >
        <div className="w-[fit-content] px-3 py-1 bg-not-quite-black rounded-t-lg ">
          {message.author}
        </div>
        <div
          className={`flex justify-between space-x-2 sm:space-x-3 md:space-x-5 bg-red-900 w-4/5 sm:w-3/5 md:w-2/5 p-3 shadow-2xl ${
            message.author === currentUser
              ? "flex-row-reverse space-x-reverse bg-paperLight rounded-l-xl"
              : "flex-row bg-paper rounded-r-xl"
          }`}
        >
          <Avatar
            src={`https://picsum.photos/seed/${message.author}/200/300`}
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
              {getTime(message.timestamp)}
            </small>
          </div>
        </div>
      </div>
    </div>
  ));
}
