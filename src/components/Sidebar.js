import { useSelector } from "react-redux";

const Sidebar = () => {

    const isSideBarOpen = useSelector((store) => store.app.isMenuOpen)

    if (!isSideBarOpen) return;

    return (
        <div className="shadow-lg w-56 pt-2 pl-5 h-full" >
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Live</li>
                <li>videos</li>
            </ul>
            <h1 className="font-bold pt-5">Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold">Watch later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar;