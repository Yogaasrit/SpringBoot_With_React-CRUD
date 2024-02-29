import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button } from "bootstrap";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:9090/users");
    setUsers(users.data);
  };

  const {id} = useParams

  const handleDeleteUser = async(id) =>{
    await axios.delete(`http://localhost:9090/DeleteById/${id}`)
    loadUsers()
  }
  return (
    <div className="container">
      <div className="py-4">
        <h3>List of users</h3>
        <table className="table shadow">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">UserName</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index) =>(
              <tr className="table-light">
              <th scope="row" key={index}>{index+1}</th>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                <Link className="btn btn-outline-primary mx-2" to = {`/edituser/${user.id}`}>Edit</Link>
                <button className="btn btn-danger mx-2" onClick = {()=>handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
              ))
            } 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
