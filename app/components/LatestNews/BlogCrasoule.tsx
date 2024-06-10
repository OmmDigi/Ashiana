"use client";

import { IBlogsItem } from '@/types/blogs';
import React, { useEffect, useState } from 'react'

interface IProps {
    blogsData : IBlogsItem[]
}

export default function BlogCrasoule({blogsData} : IProps) {

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const newLists : IBlogsItem[][] = [];
    const tempList : IBlogsItem[] = [];
    blogsData.forEach((item, index) => {
       if((index + 1) % 3 === 0) {
        
       }
       

    })
  })


  return (
    <div>
        
    </div>
  )
}
