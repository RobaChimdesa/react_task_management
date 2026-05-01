import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";
import { useAuthStore } from "../store/authStore";
import UserTaskCard from "./userTaskCard";
import CreateTask from "./userCreateTaskPage";
import Button from "../component/ui/button";
import TaskSearch from "./TaskSearch";

const TaskList = () => {
  const [show, setShow] = useState(false);
  const { tasks, fetchTasks, search } = useTaskStore();
  const user = useAuthStore((state) => state.user);

  const handleCreateTask = () => {
    setShow(!show);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    if (user) {
      fetchTasks(user.id);
    }
  }, [user]);

  return (
    <div className="">
      {tasks.length <= 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <h2 className="text-2xl font-semibold text-gray-700">
            No tasks found
          </h2>
        </div>
      ) : (
        <div className="mt-6">
          <div className=" my-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Your List Of Task
              </h1>
            </div>
            <div className="flex justify-center gap-2 mt-3 mb-5">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <div className="w-6 h-1 bg-indigo-600 rounded-full"></div>
              <div className="w-3 h-1 bg-purple-600 rounded-full"></div>
            </div>
            <TaskSearch />
          </div>
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-white text-lg font-medium">
                No matching tasks
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Try adjusting your search
              </p>
            </div>
          ) : (
            filteredTasks.map((task, index) => (
              <UserTaskCard key={`${task.userId}-${index}`} task={task} />
            ))
          )}
        </div>
      )}
      <Button
        text="Add Task"
        variant="primary"
        onHandleClick={handleCreateTask}
        className={`${filteredTasks.length === 0 ? "mx-96" : "mx-56"} mb-5`}
      />
      {show && <CreateTask />}
    </div>
  );
};

export default TaskList;
