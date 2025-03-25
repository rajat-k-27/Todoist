"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [editingDescription, setEditingDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("/api/tasks");
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      await axios.post("/api/tasks", { title: newTask, description: newDescription });
      setNewTask("");
      setNewDescription("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const editTask = (id, title, description) => {
    setEditingId(id);
    setEditingText(title);
    setEditingDescription(description);
  };

  const updateTask = async (id) => {
    if (!editingText.trim()) return;
    try {
      await axios.put("/api/tasks", { id, title: editingText, description: editingDescription });
      setEditingId(null);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await axios.put("/api/tasks", { id, completed: !completed });
      fetchTasks();
    } catch (error) {
      console.error("Error updating completion status:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete("/api/tasks", { data: { id } });
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Task Manager
          </h1>
          <p className="text-lg text-gray-600">
            Organize your work and boost productivity
          </p>
        </div>

        {/* Task Input */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">
                Task Title
              </label>
              <input
                id="task-title"
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter task title..."
              />
            </div>
            <div>
              <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-1">
                Description (Optional)
              </label>
              <input
                id="task-description"
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter description..."
              />
            </div>
            <button
              onClick={addTask}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-150 ease-in-out"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {tasks.length === 0 ? (
              <li className="px-6 py-8 text-center">
                <p className="text-gray-500">No tasks yet. Add one above to get started!</p>
              </li>
            ) : (
              tasks.map((task) => (
                <li key={task._id} className="px-6 py-4 hover:bg-gray-50 transition duration-150">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 pt-1">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task._id, task.completed)}
                        className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                      />
                    </div>
                    
                    {editingId === task._id ? (
                      <div className="flex-1 space-y-3">
                        <input
                          type="text"
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <input
                          type="text"
                          value={editingDescription}
                          onChange={(e) => setEditingDescription(e.target.value)}
                          className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Description (Optional)"
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateTask(task._id)}
                            className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Save Changes
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex-1 min-w-0">
                          <p className={`text-lg font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                            {task.title}
                          </p>
                          {task.description && (
                            <p className={`text-sm ${task.completed ? "text-gray-400" : "text-gray-500"}`}>
                              {task.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => editTask(task._id, task.title, task.description)}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteTask(task._id)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}