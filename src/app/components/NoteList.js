// frontend/src/app/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onSubmit }) => {
    return (
        <div className='flex gap-10 flex-wrap'>
            {notes.map(note => (
                <Note key={note._id} note={note} onDel={()=>{onSubmit()}} />
            ))}
        </div>
    );
};

export default NoteList;
