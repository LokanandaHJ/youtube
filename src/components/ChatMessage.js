const ChatMessage = ({ name, messages }) => {
  return (
    <div className="flex items-center mt-3">
      <img
        className="h-6 w-6"
        alt="user-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      ></img>
      <p className="font-bold mx-1">{name}</p>
      <p className="mx-1">{messages}</p>
    </div>
  );
};

export default ChatMessage;
