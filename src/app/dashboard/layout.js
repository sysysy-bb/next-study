"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  useState } from "react";
// import Link from "next/link";


export default function DashboardLayout({ children }) {
  const path=usePathname()
    console.log(path);
  const [count,setCount]=useState(0);
  return (
    <div style={{border:'1px solid black'}}>
        <div>
          <Link href='/dashboard/about'>About</Link>
          <Link href='/dashboard/settings'>Settings</Link>
        </div>
      <div>dashboard layout {count}</div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      {children}
    </div>
  );
}
