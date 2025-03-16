import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { useState } from "react"
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    const [videos, setVideos] = useState(null);

    useEffect(() => {
        getVideosFromApi();
    }, [])

    const getVideosFromApi = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const jsonData = await data.json();
        console.log('----------', jsonData);
        setVideos(jsonData.items);
    }

    if (!videos) return;

    return (
        <div className="flex flex-wrap p-10">
            <AdVideoCard info={videos[0]} />
            {
                videos.map((video) =>
                    <Link to={"watch?v=" + video.id}>
                        <VideoCard info={video} />
                    </Link>
                )
            }
        </div>
    )
}

export default VideoContainer;