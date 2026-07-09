import React from 'react'
import Cards from './Cards'

 const arr =[
  {
    "id": 1,
    "user": "Roshani Thakare",
    "text": "Frontend developer passionate about building modern UI with React.",
    "likes": 120,
    "posts": 45,
    "saves": 30,
    "image": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "id": 2,
    "user": "Amit Sharma",
    "text": "Love coding and solving real-world problems using JavaScript.",
    "likes": 200,
    "posts": 60,
    "saves": 40,
    "image": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "id": 3,
    "user": "Neha Patil",
    "text": "UI/UX enthusiast designing clean and user-friendly interfaces.",
    "likes": 150,
    "posts": 35,
    "saves": 25,
    "image": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "id": 4,
    "user": "Rahul Verma",
    "text": "Full stack developer working with MERN stack.",
    "likes": 300,
    "posts": 80,
    "saves": 50,
    "image": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "id": 5,
    "user": "Sneha Kulkarni",
    "text": "Exploring new technologies and building creative projects.",
    "likes": 180,
    "posts": 55,
    "saves": 35,
    "image": "https://randomuser.me/api/portraits/women/5.jpg"
  }
]

 const Users = () => {
  return (
    <div className="parent">
      {arr.map(function(e){
      return <Cards user={e.user} image={e.image} text={e.text} likes={e.likes} posts={e.posts} saves={e.saves} />
      })}
    </div>
  )
}

export default Users