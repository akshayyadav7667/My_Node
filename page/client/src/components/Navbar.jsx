import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" flex bg-blue-500 h-15 md:h-20">
      <div className="flex-5 flex justify-around items-center bg-blue-50">
        <Link to="/">
          <h2 className="text-2xl text-blue-500 font-bold">Search.com</h2>
        </Link>

        <div>
          <ul className="flex gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/add-user">Add users</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-2 flex justify-center align-center space-x-5 bg-sky-50">
        <button className=" my-3 px-5 bg-yellow-400 rounded text-white">
          card
        </button>
        <button className=" my-3 px-5 bg-blue-400"> Login</button>
      </div>
    </div>
  );
}
