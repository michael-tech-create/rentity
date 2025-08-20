"use client"
import { Button } from "@mui/material";
import { useState } from "react";


export default function UserInfo() {
const [count, setCount] = useState(0)
  return (
    <main>
    <div className="text-center flex-cols gap-10 justify-center items-center my-6">
        <p className="mb-6 ">count: {count}</p>
<button onClick={()=>setCount(count + 1)} className="bg-blue-500 rounded w-[100px] h-[50px] text-white">click to add</button>
    </div>
    <Button className="ml-10" variant="contained">click on me</Button>

    
    </main>
  );
}

