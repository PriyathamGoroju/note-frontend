'use client'
import React, {useState, useEffect} from 'react'
import EditNotePage from '../../edit'
import { auth } from '@/app/components/Auth';

export default function EditPage({params}) {
  const [data, setData] = useState(null);
    useEffect(() => {
        auth({ method: "GET", url: `todo/${params.id}` }).then((res) => {
            console.log(res);
            setData(res);
        });
    }, []);
  return (
    <div>{data && <EditNotePage note={data} />}</div>
  )
}
