import React from 'react'
import {Bookmark} from 'lucide-react';
import { AppWindow,MessageCircle,Laugh } from "lucide-react"

const Cards = (probs) => {
  return (
    <div className='main'>
        <div className="top">
            <button>
                +Follow
            </button>
            <img src={probs.image} alt="profile" />
        </div>
        <div className="middle">
            <h2>{probs.user}</h2>
            <p>
                {probs.text}
            </p>
        </div>
      <div className="bottom">
       <div className="box">{probs.likes} Likes</div>
       <div className="box">{probs.posts} posts</div>
       <div className="box">{probs.saves} saves</div>
      </div>
      <div className="last">
      <AppWindow />
      <Laugh />
      <MessageCircle />
      </div>
    </div>
  )
}

export default Cards