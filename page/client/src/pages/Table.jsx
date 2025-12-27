import React from "react";

export default function Table({ users }) {
  return (
    <div className="py-10">
      <table className="w-full">
        <thead className="bg-red-400 border text-white ">
          <tr>
            <th className="border text-left p-3">S.No</th>
            <th className="border text-left p-3">ID</th>
            <th className="border text-left p-3">Name</th>
            <th className="border text-left p-3">Email</th>
            <th className="border text-left p-3">Phone</th>
            <th className="border text-left p-3">Dob</th>
          </tr>
        </thead>

        <tbody  >
          {users.map((item, index) => (
            <tr key={index} className={`${index%2===0 ? "bg-blue-50": "bg-white"} hover:bg-blue-200 ` }>
              <td className=" p-2">{index+1}</td>
              <td className=" p-2">{item._id}</td>
              <td className=" text-yellow-600 p-2">{item.name}</td>
              <td className=" text-pink-600 p-2">{item.email}</td>
              <td className=" text-green-500 font-bold p-2">{item.phone}</td>
              <td className="p-2">{item.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
