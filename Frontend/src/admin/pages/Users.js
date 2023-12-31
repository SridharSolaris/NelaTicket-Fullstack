import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../Config";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const users = await axios.get(`${config.api}/user/allusers`);
      if (users) {
        setUsers(users.data.newuser);
        console.log(users.data.newuser);
      } else {
        console.log("Users not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="flex justify-between mb-2">
        <h3>Users List</h3>
        <Link className="btn btn-primary btn-sm" to="/portal/movies">
          Back
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr className="table-primary">
            {/* <th scope="col">User ID</th> */}
            <th scope="col">Name</th>
            <th scope="col">Phone number</th>
            <th scope="col">Email ID</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.ph_no}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
