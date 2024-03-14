'use client'
import React from 'react';
import NoteForm from './components/NoteForm';
import { auth } from './components/Auth';

const EditNotePage = ({ note, onSubmit, onClose }) => {
    const handleSubmit = (formData) => {
        auth({method:'PATCH', url:`todo/${note._id}`, data:{...formData}})
        .then(res=>console.log(res));
        console.log(formData)
        onSubmit();
    };
    const handleClose = () =>{
        onClose();
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Edit Note</h1>
            <NoteForm onSubmit={handleSubmit} initialValues={note} onClose={handleClose}/>
        </div>
    );
};

export default EditNotePage;
