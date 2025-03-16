const VideoCard = ({ info }) => {

    console.log(info)
    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;

    return (
        <div className="p-2 m-2 w-56 shadow-2xl flex flex-col justify-between h-64 overflow-hidden">
            <div className="p-2 flex-grow">
                <img className="rounded-lg w-full" src={thumbnails.default.url} alt="video" />
                <ul className="mt-2">
                    <li className="font-sm font-bold overflow-hidden whitespace-nowrap text-ellipsis">{title}</li>
                    <li className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{channelTitle}</li>
                    <li className="text-sm">{statistics.viewCount} views</li>
                </ul>
            </div>
        </div>
    )
}

export const AdVideoCard = ({ info }) => {
    return (
        <div className="p-1 m-1 border border-red-700">
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard;