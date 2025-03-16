import { Link } from "react-router-dom";
import { toggleMenu as toggleMenuAction } from "../utils/slices/appSlice";
import { useDispatch } from 'react-redux'

const Header = () => {

    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch(toggleMenuAction())
    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg cursor-pointer">
            <div className="col-span-1 flex">
                <img className="h-8" alt="menuIcon" onClick={() => toggleSidebar()} src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"></img>
                {/* <Link to={"/"}> */}
                <img className="h-8 mx-2" alt="YTLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"></img>
                {/* </Link> */}
            </div>
            <div className="col-span-10 px-10 w-full">
                <input className="w-3/4 text-center border rounded-l-full p-2 border-gray-400" type="text"></input>
                <button className="text-center border rounded-r-full px-5 py-2 border-gray-400">Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
            </div>
        </div>
    )
}

export default Header;