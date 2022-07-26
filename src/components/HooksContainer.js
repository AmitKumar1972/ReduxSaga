import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userActions";

function HooksContainer() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Users List --{users}</h2>
      <button onClick={() => dispatch(fetchUser())}>Fetch Users</button>
    </div>
  );
}

export default HooksContainer;
