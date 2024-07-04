"use client"
import React from 'react';

interface MediumPostProps {
    title: string;
    content: string;
}

const MediumPost: React.FC<MediumPostProps> = ({ title, content } : MediumPostProps) => {
    return (
        <div className="border p-3 rounded-xl">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3 ">{content}</p>
        </div>
    );
};

export default MediumPost;
