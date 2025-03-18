import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const link = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSideBar());
  }, [dispatch]);

  return (
    <div>
      <div className="p-2">
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
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
