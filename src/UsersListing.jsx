// UserListing.jsx
import PropTypes from "prop-types";
import "./UsersListing.css";

const UserListing = ({ users }) => {
  return (
    <div className="user-listing-container">
      <h2>User Listing</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <img src={user.imageUrl} alt={user.name} />
            <div className="user-details">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>DOB: {user.dob}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

UserListing.propTypes = {
  users: PropTypes.string.isRequired,
};

export default UserListing;
