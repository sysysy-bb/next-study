import React from 'react'
import {photos} from '@/data'

export default function page({params}) {
    const item=photos.find((item)=>item.id===params.id)

  return (
    <div>
        <div>{item.alt}</div>
        <div>{item.price}</div>

    </div>
  )
}
