import { useTaskStore } from "../store/taskStore";
import { useState } from "react";

const TaskSearch = () => {
  const search = useTaskStore((state) => state.search);
  const setSearch = useTaskStore((state) => state.setSearch);
  const [filterType, setFilterType] = useState("all");

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-100 mx-96">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your tasks..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filterType === "all"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType("completed")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filterType === "completed"
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilterType("pending")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filterType === "pending"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Pending
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskSearch;