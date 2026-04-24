import UserHeader from "./UserHeader";
import CreateTask from "./userCreateTaskPage";
import TaskList from "./userTaskPage";
const Dashboard = () => {
    return (
        <div>
            <UserHeader />
            < TaskList />
            <h1>Dashboard</h1>
            <CreateTask />
        </div>  
    )
}

export default Dashboard