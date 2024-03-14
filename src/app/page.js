"use client";
import React, { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import CreateNotePage from "./create";
import { auth } from "./components/Auth";

const NotesIndexPage = () => {
    const [open, setOpen] = useState(false);
    const [notes, setNotes] = useState(null);
    const [del, setDel] = useState(true)
    useEffect(() => {
        auth({ method: "GET", url: "todo" })
        .then((res) => {
            res.map(item=>{return item.key = item._id})
            setNotes(res);
        });
    }, [open, del]);
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Notes</h1>
            <button
                onClick={() => {
                    setOpen(!open);
                }}
                className="hover:bg-blue-600 text-white px-6 py-3 my-6 rounded-md hover:scale-105 bg-slate-800"
            >
                Create
            </button>
            {open && (
                <CreateNotePage
                    onSubmit={() => {
                        setOpen(!open);
                    }}
                    onClose = {() => {
                        setOpen(!open);
                    }}
                />
            )}
            {notes && <NoteList notes={notes} onSubmit={() => {
                        setDel(!del);
                    }} />}
        </div>
    );
};

export default NotesIndexPage;
