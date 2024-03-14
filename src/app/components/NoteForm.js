'use client'
import React, { useState } from "react";

const NoteForm = ({ initialValues = {}, onSubmit, onClose }) => {
    const [title, setTitle] = useState(initialValues.title || "");
    const [body, setContent] = useState(initialValues.body || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, body });
    };
    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-slate-700 bg-slate-700 text-slate-100 rounded-md px-3 py-2 mb-2 block w-full focus:border-blue-600 focus:outline-none"
            />
            <textarea
                placeholder="Content"
                required
                value={body}
                onChange={(e) => setContent(e.target.value)}
                className="border-2 border-slate-700 bg-slate-700 text-white h-96 rounded-md px-3 py-2 mb-2 block w-full focus:border-blue-600 focus:outline-none"
            />
            <button
                type="submit"
                className="hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md bg-slate-700"
            >
                Save
            </button>
            <button
                onClick={handleClose}
                className="hover:bg-blue-600 text-white px-4 py-2 rounded-md bg-slate-700"
            >
                Close
            </button>
        </form>
        </div>
    );
};

export default NoteForm;
