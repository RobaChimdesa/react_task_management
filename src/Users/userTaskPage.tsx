import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";
import { useAuthStore } from "../store/authStore";
import UserTaskCard from "./userTaskCard";
import CreateTask from "./userCreateTaskPage";
import Button from "../component/ui/button";

const TaskList = () => {
  const [show, setShow] = useState(false);
  const { tasks, fetchTasks } = useTaskStore();
  const user = useAuthStore((state) => state.user);

  const handleCreateTask = () => {
    setShow(!show);
  };

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
            <div className="flex justify-center gap-2 mt-3">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <div className="w-6 h-1 bg-indigo-600 rounded-full"></div>
              <div className="w-3 h-1 bg-purple-600 rounded-full"></div>
            </div>
          </div>
          {tasks.map((task, index) => (
            <UserTaskCard key={`${task.userId}-${index}`} task={task} />
          ))}
        </div>
      )}
      <Button
        text="Add Task"
        variant="primary"
        onHandleClick={handleCreateTask}
        className="mx-56 mb-5"
      />
      {show && <CreateTask />}
    </div>
  );
};

export default TaskList;
