import React from "react";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchUsers, setUsers } from "../store/allUsers";

const AllUsers = (props) => {
  const dispatch = useDispatch();
  const users = props.usersData.users;

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchUsers());
    }

    fetchData();
  }, [dispatch]);

  return (
    <div>
      hello Users
      <div>
        {users.map((user) => {
          <div key={user.id}>UserName: {user.username}</div>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { usersData: state };
};

export default connect(mapStateToProps)(AllUsers);
