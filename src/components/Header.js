import { toggleMenu as toggleMenuAction } from "../utils/slices/appSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to store the search suggestions
  const [suggestions, setSuggestions] = useState([]);
  // State to control the visibility of suggestions
  const [showSugestion, setShowSuggestions] = useState(false);

  // Get the search cache from the Redux store
  const searchCache = useSelector((store) => store.search);

  // useEffect hook to fetch search suggestions whenever the search query changes
  useEffect(() => {
    // Set a timer to delay the API call by 700 milliseconds
    const apiSearchTimer = setTimeout(() => {
      if (searchCache && searchCache[searchQuery]) {
        // If the search query is in the cache, use the cached suggestions
        setSuggestions(searchCache[searchQuery]);
      } else {
        // Otherwise, fetch new search suggestions
        getSearchSuggestions(searchQuery);
      }
    }, 400);

    // Cleanup function to clear the timer if the component unmounts or the searchQuery changes
    return () => {
      clearTimeout(apiSearchTimer);
    };
  }, [searchQuery]); // Dependency array: the effect runs whenever searchQuery changes

  // useDispatch hook to get the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to toggle the sidebar menu
  const toggleSidebar = () => {
    dispatch(toggleMenuAction());
  };

  // Function to fetch search suggestions from the YouTube API using a CORS proxy
  const getSearchSuggestions = async (searchQuery) => {
    console.log("--------------------text-----------------", searchQuery);

    // CORS proxy URL
    const proxyUrl = "https://api.allorigins.win/get?url=";
    // Encode the target URL to be used with the proxy
    const targetUrl = encodeURIComponent(YOUTUBE_SEARCH_API + searchQuery);
    // Combine the proxy URL and the encoded target URL
    const data = proxyUrl + targetUrl;

    try {
      // Fetch the data from the proxy URL
      const searchResult = await fetch(data);
      // Parse the JSON response
      const searchResultjson = await searchResult.json();
      // Extract the suggestions from the response
      const suggestions = JSON.parse(searchResultjson.contents);
      // Update the suggestions state
      setSuggestions(suggestions[1]);
      // Dispatch an action to update the search cache in the Redux store
      dispatch({ searchQuery: suggestions[1] });
    } catch (error) {
      // Log any errors to the console
      console.log(error);
    }
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg cursor-pointer">
      <div className="col-span-1 flex">
        {/* Menu icon to toggle the sidebar */}
        <img
          className="h-8"
          alt="menuIcon"
          onClick={toggleSidebar}
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
        ></img>
        {/* YouTube logo */}
        <img
          className="h-8 mx-2"
          alt="YTLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        ></img>
      </div>
      <div className="col-span-10 px-10 w-full">
        <div>
          {/* Search input field */}
          <input
            className="w-3/4 text-center border rounded-l-full p-2 border-gray-400"
            type="text"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          {/* Search button */}
          <button className="text-center border rounded-r-full px-5 py-2 border-gray-400">
            Search
          </button>
        </div>
        {/* Display suggestions if showSugestion is true and suggestions array is not empty */}
        {showSugestion && suggestions.length > 0 ? (
          <div className="absolute bg-white w-[759px] rounded-lg py-2 px-5 m-2 shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((item, index) => (
                <li key={index} className="px-1 py-2 hover:bg-gray-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="col-span-1">
        {/* User icon */}
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
