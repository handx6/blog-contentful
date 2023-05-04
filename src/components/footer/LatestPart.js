import React from 'react'
import CardFooter from '../cards/CardFooter'

export default function LatestPart({posts}) {
  return (
    <div className=''>
        <h6 className='pb-6 text-white text-lg'>Latest news</h6>
        {posts.map((item) => (
            <CardFooter post={item} key={item.sys.id}/>
        ))}
    </div>
  )
}


