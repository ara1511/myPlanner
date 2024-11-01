import React from 'react';
import { ErrorAlert } from './ErrorAlert';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { Header } from './Header';

export const TaskManager = ({ 
    tasks,
    error,
    newTask,
    onTaskChange,
    onSubmit,
    onToggleTask,
    onDeleteTask
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
            <div className="max-w-4xl mx-auto">
                <Header title="Task Manager" />
                <ErrorAlert message={error} />
                <TaskForm 
                    newTask={newTask}
                    onTaskChange={onTaskChange}
                    onSubmit={onSubmit}
                />
                <TaskList 
                    tasks={tasks} 
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                />
            </div>
        </div>
    );
};