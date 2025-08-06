// "use client"

import BlogList from "@/compontent/blogList";
import React from "react";


export const metadata={
    title:"博客列表"

}


export default function page() {
  return (
    <div>
      <BlogList />

    </div>
  );
}
