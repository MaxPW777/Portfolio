import React from "react";

function CommentForm(){
    return (
        <form className="mt-2 w-full">
                <textarea className="mt-2 p-2 w-full border rounded"
                          placeholder="Write a comment..."></textarea>
                <button
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Post
                </button>


        </form>
    )
}

export default CommentForm;
