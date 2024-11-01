import React, { useState, useEffect } from 'react';
import { TaskManager } from './components/TaskManager';
import TaskController from "./controller/TaskController.js";


const taskController = new TaskController();

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [newTask, setNewTask] = useState({ title: '', completed: false });
    
    useEffect(() => {
        loadTasks();
    }, []);
    
    const loadTasks = async () => {
        try {
            const fetchedTasks = await taskController.getTasks();
            setTasks(fetchedTasks);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const processedTask = taskController.processNewTask(newTask);
            setTasks([processedTask, ...tasks]);
            setNewTask({ title: '', completed: false });
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleToggleTask = async (taskId) => {
        try {
            await taskController.toggleTaskStatus(taskId);
            setTasks(tasks.map(task => 
                task.id === taskId 
                    ? { ...task, completed: !task.completed }
                    : task
            ));
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await taskController.deleteTask(taskId);
            setTasks(tasks.filter(task => task.id !== taskId));
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <TaskManager
            tasks={tasks}
            error={error}
            newTask={newTask}
            onTaskChange={setNewTask}
            onSubmit={handleSubmit}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
        />
    );
}
