import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useTaskStore } from "../store/taskStore";
const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const user = useAuthStore((state) => state.user);
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(typeof user?.id);
    console.log();

    if (!title || !deadline) return;

    await addTask({
      title,
      completed: false,
      userId: user!.id,
      deadline,
      id: 0,
    });

    setTitle("");
    setDeadline("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task..."
          className="border p-2 rounded"
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border p-2 rounded"
        />
        <button className="bg-blue-500 text-white px-4 rounded">Add</button>
      </form>
    </div>
  );
};

export default CreateTask;
