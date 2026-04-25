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
    setShow(!show)
  }

  useEffect(() => {
    if (user) {
      fetchTasks(user.id);
    }
  }, [user]);

  return (
   <div className="">
    {tasks.length <= 0 ? (
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <h2 className="text-2xl font-semibold text-gray-700">No tasks found</h2>
      </div>
    ) : (
      <div className="mt-6">
        {tasks.map((task,index) => (
          <UserTaskCard 
            key={`${task.userId}-${index}`}
        task={task}
       />
      ))}
    </div>)}
     <Button
     text="Add Task"
     variant="primary"
     onHandleClick={handleCreateTask}
    />
    {show && <CreateTask />}
   </div>
  );
};

export default TaskList;