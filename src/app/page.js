import React from "react";
import Image from 'next/image'

// import { Image } from "antd";
import { photos } from "@/data";
import Link from "next/link";
export default function page() {
  return (
    <div>
      {photos.map((item, index) => {
        return (
          <Link href={`/photo/${item.id}`} key={item.id}>

            <Image width={200} height={200} src={item.src} alt={item.alt} />
            <div>{item.alt}</div>
            <div>{item.price}</div>
          </Link>
        );
      })}
    </div>
  );
}
