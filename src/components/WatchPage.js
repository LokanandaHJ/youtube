import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/slices/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [searchParams] = useSearchParams();

    const link = searchParams.get("v");

    useEffect(() => {
        dispatch(closeSideBar());
    }, [dispatch]);

    return (
        <div>
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
    );
};

export default WatchPage;