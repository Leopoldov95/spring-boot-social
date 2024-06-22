import React from 'react'
import Post from '../posts/Post';


//! This will be specific to the home page as other pages will use a masonry display, this may be useed for both but we will see

const Feed = () => {
    const cards = [1,2,3,4,5,6,7,8,9,0];
  return (
   <div className='flex flex-col gap-4'>
    {cards.map((id) => <Post key={id} />)}
   </div>
  )
}

export default Feed
