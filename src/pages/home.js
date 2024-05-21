import React from 'react'
import { posts } from '../constants/data'
import Card from '../components/UI/card'

const Home = () => {
  return (   
     
    <div className="home">
    {posts.map(post=>(
        <Card key={post.id} post={post}/>
    ))}
</div>
  )
}

export default Home