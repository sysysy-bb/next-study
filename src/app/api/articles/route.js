import db from "@/db";
import { NextResponse } from "next/server";

export async function POST(request){
    const data=await request.json();
    await db.update(({posts})=>posts.push({
        id:Math.random().toString(36).substring(2),
        ...data
    }
    ))
    return NextResponse.json({
        code:0,
        message:"success",
        data
    })
}

export async function GET(request){
     try {
    // 获取所有文章数据
    const posts = await db.data.posts;
    
    return NextResponse.json({
      code: 0,
      message: "success",
      data: posts || []
    });

  } catch (error) {
    return NextResponse.json(
      { code: 500, message: "Internal server error" },
      { status: 500 }
    );
  }
}