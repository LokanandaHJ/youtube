import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/slices/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [chatMessage, setChatMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      // here we can do fetch and get the live data instead we are dispatching some constant obj
      dispatch(
        addMessage({
          name: "Lok",
          message: "You are the best",
        })
      );
    }, 2000);

    return () => clearInterval(chatInterval);
  }, []);

  return (
    <>
      <div className="h-[514px] ml-2 p-2 border border-black bg-gray-100 relative">
        <p className="font-bold my-1">Live Chat</p>
        {chatMessages.map((chat, index) => (
          <ChatMessage name={chat.name} messages={chat.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black absolute"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Messi", message: chatMessage }));
          setChatMessage("");
        }}
      >
        <input
          className="w-96"
          type="text"
          onChange={(e) => {
            setChatMessage(e.target.value);
          }}
          value={chatMessage}
        />
        <button className="px-2 mx-2 bg-green-100" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
