"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
// import Link from "next/link";


export default function DashboardTemplate({ children }) {
  const [count,setCount]=useState(0);
  return (
    <div style={{border:'1px solid black'}}>
        
      <div>dashboard template {count}</div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      {children}
    </div>
  );
}
