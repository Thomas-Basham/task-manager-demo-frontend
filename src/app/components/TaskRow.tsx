import React, { useState } from "react";
const TaskRow: React.FC<TaskRowProps> = ({ task, onUpdate }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<Task>(task);

  const handleEditChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setEditedTask({ ...editedTask, [event.target.name]: event.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onUpdate(editedTask);
    }
  };

  return (
    <tr className="text-cyan-800 hover:bg-cyan-100 w-full ">
      <td className="p-2">
        {isEditing ? (
          <input
            className="w-full text-gray-900 mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleEditChange}
          />
        ) : (
          task.title
        )}
      </td>
      <td className="p-2">
        {isEditing ? (
          <input
            className="w-full text-gray-900 mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
          />
        ) : (
          task.description
        )}
      </td>
      <td className="p-2">
        {isEditing ? (
          <select
            className="w-full mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            name="status"
            value={editedTask.status}
            onChange={handleEditChange}
          >
            <option value="todo">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        ) : (
          task.status
        )}
      </td>
      <td className="p-2">
        {isEditing ? (
          <select
            className="w-full mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            name="priority"
            value={editedTask.priority}
            onChange={handleEditChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        ) : (
          task.priority
        )}
      </td>
      <td className="p-2">
        {isEditing ? (
          <input
            className="w-full text-gray-900 mt-1 px-2 py-1 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            type="date"
            name="dueDate"
            value={editedTask.dueDate.split("T")[0]} // Assuming dueDate is in ISO format
            onChange={handleEditChange}
          />
        ) : (
          new Date(task.dueDate).toLocaleDateString()
        )}
      </td>
      <td className="p-2">
        <button
          className="px-4 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
          onClick={toggleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
