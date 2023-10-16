import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data";
type customersProps = {};

const customers: React.FC<customersProps> = () => {
  return (
    <div className="p-4">
      <div className="w-full p-4 border rounded-lg bg-white overflow-y-auto">
        <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center cursor-pointer justify-between ">
          <span>Name</span>
          <span className="sm:text-left text-right">Email</span>
          <span className="hidden md:grid">Last Order</span>
          <span className="hidden md:grid">Name</span>
        </div>
        <ul>
          {data.map((order, id) => (
            <li
              key={id}
              className="bg-gray-50 hoewver:bg-gray-100 rounded-lg my-3 p-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer "
            >
              {" "}
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BsPersonFill className="text-purple-800" />
                </div>
                <p className="pl-4">
                  {order.name.first + " " + order.name.last}
                </p>
              </div>
              <p className="text-gray-600 sm:text-left text-right">
                {order.name.first}@gmail.com
              </p>
              <p className="hidded md:flex">{order.date}</p>
              <div className="sm:flex hidded justify-between items-center">
                <p>{order.method}</p>
                <BsThreeDotsVertical className="text-gray-400" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default customers;
