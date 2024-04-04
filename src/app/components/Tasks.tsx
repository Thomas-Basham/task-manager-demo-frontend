import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskRow from "./TaskRow";
import { table } from "console";
// import { Task, TasksProps } from "../interfaces"; // Assuming you've defined these in a separate file.

const Tasks: React.FC<TasksProps> = ({ projectId }) => {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAdding, setIsAdding] = useState(false); // To toggle add task form
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskDueDate, setTaskDueDate] = useState<string>("");

  useEffect(() => {
    const fetchTasks = async () => {
      if (baseURL) {
        axios
          .get(baseURL + "/tasks")
          .then(function (response) {
            // handle success
            console.log(response.data);
            const filteredTasks = response.data.filter((task: Task) => {
              return task.projectid == projectId;
            });
            setTasks(filteredTasks);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      }
    };
    fetchTasks();
  }, []);

  const addTask = () => {
    setIsAdding(true);
    // Placeholder for actual add task logic, like API call
  };

  const updateTask = async (updatedTask: Task) => {
    // await axios.put(`/api/tasks/${updatedTask.id}`, updatedTask);
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  const saveNewTask = async (task: Task) => {
    setIsAdding(false);
    // Here you would send the task to the backend and fetch all tasks again or update the state with the returned task

    setTasks([...tasks, { ...task }]);
    setTaskDescription("");
    setTaskDueDate("");
    setTaskTitle("");
  };

  const cancelNewTask = () => {
    setIsAdding(false);
    setTaskDescription("");
    setTaskDueDate("");
    setTaskTitle("");
  };

  return (
    <table className="w-full text-left text-sm text-gray-700">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Title
          </th>
          <th scope="col" className="py-3 px-6">
            Description
          </th>
          <th scope="col" className="py-3 px-6">
            Status
          </th>
          <th scope="col" className="py-3 px-6">
            Priority
          </th>
          <th scope="col" className="py-3 px-6">
            Due Date
          </th>
          <th scope="col" className="py-3 px-6">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow key={task.taskid} task={task} onUpdate={updateTask} />
        ))}
        {isAdding && (
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="py-4 px-6">
              <input
                className="w-full text-gray-900 mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Title"
                autoFocus
                // Add onChange handler as needed
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </td>
            <td className="py-4 px-6">
              <input
                className="w-full text-gray-900 mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Description"
                // Add onChange handler as needed
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </td>
            <td className="py-4 px-6">
              <select
                className="w-full mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                defaultValue="todo"
                // Add onChange handler as needed
              >
                <option value="todo">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </td>
            <td className="py-4 px-6">
              <select
                className="w-full mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                defaultValue="medium"
                // Add onChange handler as needed
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </td>
            <td className="py-4 px-6">
              <input
                type="date"
                className="w-full text-gray-900 mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                // Add onChange handler as needed
                onChange={(e) => setTaskDueDate(e.target.value)}
              />
            </td>
            <td className="py-4 px-6 flex items-center space-x-2">
              <button
                className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded"
                onClick={() =>
                  saveNewTask({
                    id: String(Date.now()), // Temporary; replace with actual ID from backend
                    title: taskTitle,
                    description: taskDescription,
                    status: "todo",
                    priority: "medium",
                    projectId: projectId,
                    assignedTo: "", // Placeholder; adjust as needed
                    createdAt: new Date().toLocaleDateString(),
                    dueDate: taskDueDate || new Date().toLocaleDateString(),
                  })
                }
              >
                Save
              </button>
              <button
                className="px-4 py-1 text-white bg-red-500 hover:bg-red-600 rounded"
                onClick={cancelNewTask}
              >
                Cancel
              </button>
            </td>
          </tr>
        )}
        {!isAdding && (
          <tr className="text-center">
            <td colSpan={6}>
              <button
                className="mt-4 py-2 px-4 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition duration-150 ease-in-out"
                onClick={addTask}
              >
                + Add Task
              </button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tasks;
