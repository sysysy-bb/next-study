import React from 'react';
import Image from 'next/image'; // 必须导入Next.js的Image组件
import img from "/public/02.jpg";

export const metadata ={
  icon:"/public/next.svg",
  title:"Performance",
}
export default function Page() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image 
        src={img} 
        alt="Description of image" // 必须添加alt属性
        fill
        style={{ objectFit: 'cover' }} // 推荐添加样式控制
      />
      <h1 style={{ position: 'relative', zIndex: 1 }}>performance</h1>
    </div>
  );
}