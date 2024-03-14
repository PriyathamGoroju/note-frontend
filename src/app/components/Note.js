// frontend/src/app/components/Note.js
import React from "react";
import Link from "next/link";
import { SlNote, SlTrash, SlEye } from "react-icons/sl";
import { auth } from "./Auth";
import { toast } from "react-toastify";

const Note = ({ note, onDel }) => {
    const handleDel = () =>{
        auth({method:'DELETE', url:`todo/${note._id}`})
        .then(()=>{toast.success('Deleted Successfully')})
        onDel();
    }
    return (
        <div className="bg-gray-800 text-white w-full sm:w-64 p-4 rounded-md flex flex-col min-h-40 flex-wrap justify-between items-start hover:scale-105 hover:shadow[0px 0px 5px 4px] hover:shadow-blue-800">
            <h2 className="text-lg font-semibold">{note.title}</h2>
            <div className="flex gap-4 flex-wrap text-xl w-full justify-end">
                <Link href={`/${note._id}`}>
                    <p className="text-2xl text-green-600">
                        <SlEye />
                    </p>
                </Link>
                <Link href={`/edit/${note._id}`}>
                    <p className="text-blue-600">
                        <SlNote />
                    </p>
                </Link>
                <button className="text-red-600 m-0 p-0" onClick={handleDel}>
                    <SlTrash />
                </button>
            </div>
        </div>
    );
};

export default Note;
