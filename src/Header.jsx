// Header.jsx
import {  useEffect, useState } from "react";
import "./Header.css"; // Import the CSS file for styling
import { getAllUsers } from "./apis-fetch";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [searchLoading, setLoading] = useState(false);

  const loadUsers = async () => {
    let users = [];
    if (searchQuery)
     users = await getAllUsers(searchQuery);

    setSuggestedUsers(users);
    setLoading(false);
  }

  const handleChange = (e) => {
    setLoading(true);
    const { value } = e.target;
    setSearchQuery(value);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadUsers();
    }, 400)
    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchQuery]);


  return (
    <div className="header-container">
      <div className="search-bar">
        <div className="input-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleChange}
          />
          {searchLoading && <i className="fa-solid fa-spinner loader-icon fa-spin"></i>}
          {suggestedUsers.length > 0 && (
            <div className="user-suggestions">
              {suggestedUsers.map((user, index) => (
                <div key={index} className="suggestion-item">
                  <img src={user.imageUrl} alt={user.name} />
                  <p>{user.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
