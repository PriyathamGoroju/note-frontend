'use client'
import React from 'react';
import NoteForm from './components/NoteForm';
import { auth } from './components/Auth';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditNotePage = ({ note}) => {
    const router = useRouter();
    const handleSubmit = (formData) => {
        auth({method:'PATCH', url:`todo/${note._id}`, data:{...formData}})
        .then(()=>{toast.success("Edited successfully");})
        console.log('submit')
        router.push("/");
    };
    const handleClose = () =>{
        console.log('close')
        router.push("/");
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Edit Note - {note.title}</h1>
            <NoteForm onSubmit={handleSubmit} initialValues={note} onClose={handleClose}/>
        </div>
    );
};

export default EditNotePage;
