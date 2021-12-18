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
      <h1>OUR INSTRUCTOR (This is just to learn API :) it is not real :) )</h1>
      {users.map((user) => {
        const { id, login, avatar_url } = user;
        return (
          <div key={id}>
            <h2>{login}</h2>

            <img
              src={avatar_url}
              alt=""
              width="300px"
              onClick={() => navigate(`/instructors/${user.login}`)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Instructors;
