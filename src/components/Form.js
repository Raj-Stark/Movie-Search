import React from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <div className="bg-gray-900 h-32 p-4">
      <form className="flex flex-col justify-center items-center space-y-4  ">
        <h2 className="text-2xl text-white font-semibold">Search Movies</h2>
        <input
          type="text"
          placeholder="Search.."
          value={query}
          className=" w-1/2 p-2"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
