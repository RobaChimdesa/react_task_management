import { useTaskStore } from "../store/taskStore";
import type { ITask } from "./ITask";

interface props {
  task: ITask;
}

const UserTaskCard = ({ task }: props) => {
  const { deleteTask, toggleTask } = useTaskStore();

  return (
    <div className="backdrop-blur-lg bg-white/80 mx-56 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 mb-3 border border-white/50 hover:border-blue-300/50 group">
      <div className="flex items-start justify-between">
        {/* Task Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-2 h-2 rounded-full ${task.completed ? "bg-green-500" : "bg-blue-500"} animate-pulse`}
            ></div>
            <span
              className={`text-xs font-mono ${task.completed ? "text-green-600" : "text-blue-600"}`}
            >
              #{task.id ? task.id.toString().slice(-6) : "N/A"}
            </span>
          </div>
          <h3
            className={`text-lg font-bold mb-2 ${task.completed ? "line-through text-gray-400" : "text-gray-800"} transition-all duration-300`}
          >
            {task.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded-lg">
              <svg
                className="w-3.5 h-3.5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-medium text-gray-600">
                {task.deadline}
              </span>
            </div>
            {!task.completed && (
              <div className="flex items-center gap-1.5 px-2 py-1 bg-orange-50 rounded-lg">
                <svg
                  className="w-3.5 h-3.5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs font-medium text-orange-600">
                  In Progress
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => toggleTask(task)}
            className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 group/complete"
            aria-label={
              task.completed ? "Mark as incomplete" : "Mark as complete"
            }
          >
            <span className="text-2xl filter drop-shadow-md group-hover/complete:scale-110 transition-transform duration-200">
              {task.completed ? "✅" : "⭕"}
            </span>
          </button>
          <button
            onClick={() => deleteTask(task.id!)}
            className="p-2 rounded-xl hover:bg-red-50 transition-all duration-200 group/delete"
            aria-label="Delete task"
          >
            <svg
              className="w-5 h-5 text-red-400 group-hover/delete:text-red-600 group-hover/delete:scale-110 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTaskCard;
