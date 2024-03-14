"use client";
import React, { useEffect, useState } from "react";
import { auth } from "../components/Auth";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";

const NoteDetailPage = ({ params }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        auth({ method: "GET", url: `todo/${params.id}` }).then((res) => {
            console.log(res);
            setData(res);
        });
    }, []);
    return (
        <div className="container mx-auto py-8">
            <div className="text-xl mx-2 my-4 flex hover:font-bold hover:text-blue-600">
                <Link href={`/`} className="flex items-center">
                    <SlArrowLeft /> back
                </Link>
            </div>
            {data && (
                <div className="my-8 mx-8">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    );
};

export default NoteDetailPage;
