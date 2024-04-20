import React from "react";

const ClientInfo = ({ heading, clientsCount, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col">
      <h2 className="text-3xl font-semibold mb-10 border-b-4 border-gray-300 pb-6">
        {heading}
      </h2>
      <p className="text-7xl font-bold text-black from-orange-900 mb-3">
        {clientsCount}
      </p>
      <p className="font-normal from-slate-700 text-black text-lg mb-0">
        {description}
      </p>
    </div>
  );
};

export default ClientInfo;
