// App.jsx
import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import UserListing from "./UsersListing.jsx";
import { getAllUsers } from "./apis-fetch.js";

const AppLoader = () => {
  return (
    <div className="loader-container">
      <i className="fa-solid fa-spinner fa-2x fa-spin"></i>
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [initialLoading, setLaoding] = useState(false);

  const loadUsersApi = async () => {
    setLaoding(true);
    const users = await getAllUsers();
    setUsers(users);
    setLaoding(false);
  };

  useEffect(() => {
    loadUsersApi();
  }, []);

  return (
    <div>
      <Header />
      {initialLoading ? <AppLoader /> : <UserListing users={users} />}
    </div>
  );
};

export default App;
