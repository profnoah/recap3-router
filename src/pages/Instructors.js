import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Instructors = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="text-center">
      <h1>OUR INSTRUCTOR</h1>
      <h5 className="text-danger">
        This is just to learn API. It is not real :)
      </h5>
      {users.map((user) => {
        const { id, login, avatar_url } = user;
        return (
          <div key={id}>
            <h2>{login}</h2>

            <img
              src={avatar_url}
              alt=""
              style={{ cursor: "pointer", width: "300px" }}
              onClick={() => navigate(`/instructors/${user.login}`)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Instructors;
