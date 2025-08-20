
    "use client"
import { useEffect, useState } from "react";
import { IoLogoFacebook } from "react-icons/io";

export default function LoginPage () {
    const [count, setCount] = useState (0);
        useEffect (()=>{
            const handleFetch = async () => {
                const response = await fetch ("");
                const data = await response.json();
                console.log(data);
            }
            handleFetch()
        },[])
     return (
        <main className="flex flex-col gap-3 justify-center items-center">
            < IoLogoFacebook className="text-4xl text-red-500 mt-2" />
            <p>Count: {count} </p>
      <button onClick={()=>{setCount(count + 1)}} className="w-[100px] h-[70px] rounded bg-blue-500 text-white">increment</button>
        </main>
    )
}