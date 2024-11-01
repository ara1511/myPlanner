import React from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
    return (
        <div className="space-y-4">
            {tasks.map((task, index) => (
                <TaskItem 
                    key={task.id || index} 
                    task={task} 
                    onToggle={onToggleTask}
                    onDelete={onDeleteTask}
                />
            ))}
        </div>
    );
};