import React from "react";

type TopCardsProps = {};

const TopCards: React.FC<TopCardsProps> = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 cols-span-1 bg-white flex justify-between w-full p-4 rounded-md">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl fold-bold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 cols-span-1 bg-white flex justify-between w-full p-4 rounded-md">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl fold-bold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">18%</span>
        </p>
      </div>
      <div className=" bg-white flex justify-between w-full p-4 rounded-md">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl fold-bold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">18%</span>
        </p>
      </div>
    </div>
  );
};
export default TopCards;
