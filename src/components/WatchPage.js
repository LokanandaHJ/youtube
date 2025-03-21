import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const link = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSideBar());
  }, [dispatch]);

  return (
    <div className="w-full flex-col">
      <div className="flex w-full">
        <div className="">
          <iframe
            width="914"
            height="514"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-grow overflow-auto flex-col-reverse">
          <LiveChat />
        </div>
      </div>
      <div className="">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
