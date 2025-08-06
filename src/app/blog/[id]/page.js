import React from "react";
import { Card } from "antd";
import { data } from "@/data";

export async function generateMetadata({params}) {
    return {
        title:`博客列表---${params.id}`
    }
}
export default function page({params}) {
    const item=data.find(item=>item.id==params.id)
  return (
    <div>
      <Card title={item?.title} >
        <p>{item?.body}</p>
      </Card>
    </div>
  );
}
