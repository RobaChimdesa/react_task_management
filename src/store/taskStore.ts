import { create } from "zustand";

import { API_URL } from "../config/dot-env.config";


type Task = {
    id: number;
    title: string;
    completed:boolean;
    userId: string;
    deadline: string;
    
};

type TaskStore = {

    tasks: Task[];
    search: string;

    setSearch: (value: string) => void;

    fetchTasks: (userId: string ) => Promise<void>;

    addTask: (task:Task) => Promise<void>;

    // updateTask: (task: Task) => Promise<void>;

    deleteTask: (id:number) => Promise<void>;

    toggleTask: (task: Task) => Promise<void>;
 }


 export const useTaskStore = create<TaskStore>((set) => ({

    tasks: [],
    search: "",

    setSearch: (value) => set({ search: value }),
    

   // 🔹 GET tasks
  fetchTasks: async (userId) => {
    const res = await fetch(`${API_URL}/tasks?userId=${userId}`);
    const data = await res.json();
    set({ tasks: data });
  },

  // 🔹 ADD task
  addTask: async (task) => {
    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const newTask = await res.json();

    set((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  },

 // 🔹 DELETE task
  deleteTask: async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    }));
  },
// 🔹 TOGGLE complete
  toggleTask: async (task) => {
    const updated = { ...task, completed: !task.completed };

    await fetch(`${API_URL}/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: updated.completed }),
    });

    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === task.id ? updated : t
      ),
    }));

  },
}))

