import React from 'react';
import { CheckCircle2, Trash2, X } from 'lucide-react';

export const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between transition-all hover:shadow-lg group">
            <div className="flex items-center flex-1">
                <button
                    onClick={() => onToggle(task.id)}
                    className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full transition-all transform hover:scale-110"
                >
                    <CheckCircle2 
                        className={`h-6 w-6 mr-3 transition-colors ${
                            task.completed 
                                ? 'text-green-500 hover:text-green-600' 
                                : 'text-gray-300 hover:text-gray-400'
                        }`}
                    />
                </button>
                <span className={`${task.completed ? 'line-through text-gray-500' : ''} flex-1`}>
                    {task.title}
                </span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-sm text-indigo-600 font-medium">
                    {task.priority || 'normal'}
                </span>
                <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1"
                    title="Delete task"
                >
                    <Trash2 className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};