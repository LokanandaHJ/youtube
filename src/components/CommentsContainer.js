import CommentsData from "../utils/commentsData";

const Comment = ({ dataFromComments }) => {
  const { name, text, replies } = dataFromComments;

  return (
    <div className="flex mt-3 bg-gray-100 p-2 rounded-lg">
      <img
        className="h-8 w-8"
        alt="user-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentInfo }) => {
  return (
    <>
      {commentInfo.map((data) => (
        <>
          <Comment dataFromComments={data} />
          <div className="pl-5 border-black border-l-black ml-5">
            <CommentList commentInfo={data.replies} />
          </div>
        </>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2  bg-gray-50">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList commentInfo={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
