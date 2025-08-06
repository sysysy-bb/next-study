import React from 'react'
import { photos } from '@/data'
export default function Page({params}) {
const item=photos.find((item)=>item.id===params.id)

  return (
    <div>{item.id}</div>
  )
}
