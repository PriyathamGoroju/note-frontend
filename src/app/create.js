"use client"
import React from 'react';
import NoteForm from './components/NoteForm';
import { auth } from './components/Auth';

const CreateNotePage = ({onSubmit, onClose}) => {
    const handleSubmit = (formData) => {
        auth({method:'POST', url:'todo', data:{...formData}})
        .then(res=>console.log(res));
        console.log(formData)
        onSubmit();
    };
    const handleClose = () =>{
        onClose();
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Create New Note</h1>
            <NoteForm onSubmit={handleSubmit} onClose={handleClose}/>
        </div>
    );
};

export default CreateNotePage;
