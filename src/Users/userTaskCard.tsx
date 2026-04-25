import { useTaskStore } from "../store/taskStore";
import type { ITask } from "./ITask";


interface props{
    task: ITask
}

const UserTaskCard = ({task}: props) =>{
    const { deleteTask, toggleTask } = useTaskStore();

    

  return (
    <div>
        <div>{task.title}</div>
        <div>{task.deadline}</div>
        <div>
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
  )
}  

export default UserTaskCard;