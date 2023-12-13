// eslint-disable-next-line no-undef
const backendUrl = import.meta.env.VITE_BE_URL ? import.meta.env.VITE_BE_URL : process.env.BE_URL;

// Get all Users
const getAllUsers = async (name = "") => {
  const response = await fetch(`${backendUrl}/users?name=${name}`);
  const users = await response.json();
  return users;
};

export { getAllUsers };
