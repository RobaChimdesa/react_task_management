import { useEffect } from "react";
import { useTaskStore } from "../store/taskStore";
import { useAuthStore } from "../store/authStore";

const TaskList = () => {
  const { tasks, fetchTasks, deleteTask, toggleTask } = useTaskStore();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      fetchTasks(user.id);
    }
  }, [user]);

  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-3 border rounded-lg mb-2 flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{task.title}</p>
            <p className="text-sm text-gray-500">
              Deadline: {task.deadline}
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => toggleTask(task)}>
              {task.completed ? "✅" : "❌"}
            </button>

            <button
              onClick={() => deleteTask(task.id!)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;