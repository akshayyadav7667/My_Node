import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Table from "./Table";

export default function User() {
  const [users, setUsers] = useState([]);

  const [query,setQuery]=useState("");

  const fetchAllUsers = async (req, res) => {
    try {
      const result = await axios.get(`http://localhost:7000/api/user/all?search=${query}`);
      //   console.log(data);

      //   if(response)
      if (result.status == 200) {
        setUsers(result.data.response);
      }

      // console.log(result.data.response)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(query)

  useEffect(() => {
    fetchAllUsers();
  },[query]);

  return (
    <div className=" min-h-screen py-5 px-[5%] ">
      <div className="flex  justify-around">
        <h2 className=" text-lg font-bold">Search the Any users </h2>

        <div>
          <input
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="search..."
            className="border px-4 py-2 rounded border-gray-500 "
          />
        </div>
      </div>

      <Table users={users} />
    </div>
  );
}
