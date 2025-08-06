import { NextResponse } from "next/server";
import db from "@/db";
export async function DELETE(request,{params}){
    await db.update(({posts})=>{
        const ind=posts.findIndex(item=>item.id==params.id)
        posts.splice(ind,1)

    })
    return NextResponse.json({
        code:0,
        message:"success",
        id:params.id,

    })
}

export async function PATCH(request,{params}) {
    const data=await request.json();
    await db.update(({posts})=>{
        const idx=posts.findIndex(item=>item.id==params.id)
        posts[idx]={
            ...posts[idx],
            ...data
        }
    })
    return NextResponse.json({
        code:0,
        message:"success",
    })
}

export async function GET(request,{params}) {
    const data=db.data.posts.find(item=>item.id==params.id)
    return NextResponse.json({
        code:0,
        message:"success",
        data
    })
}
