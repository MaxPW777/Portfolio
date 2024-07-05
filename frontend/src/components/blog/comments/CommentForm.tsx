"use client"
import React, {useState} from 'react';
import {useCreateCommentMutation} from '@/services/comment'; // Adjust the import based on your project structure

interface CommentFormProps {
    postId: string;
}

function CommentForm({postId}: CommentFormProps) {
    const [comment, setComment] = useState('');
    const createCommentMutation = useCreateCommentMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!comment.trim()) return; // Prevent submitting empty comments
        createCommentMutation.mutate({
            postID: postId,
            author: 'maxi',
            content: comment
        });
        setComment(''); // Clear the input after submitting
    };

    return (
        <form onSubmit={handleSubmit} className="mt-2 w-full">
            <textarea
                className="mt-2 p-2 w-full border rounded"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button type="submit"
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                Post
            </button>
        </form>
    );
}

export default CommentForm;
