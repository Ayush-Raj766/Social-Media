import React, { useContext, useRef } from 'react'
import { PostList } from '../store/Post-List';

export default function Createpos({setSelectedTab}) {
  const {addpost}=useContext(PostList)
  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit =(event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostBody =PostBodyElement.current.value;
    const  reactions =reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ')

    userIdElement.current.value=""
    PostTitleElement.current.value=""
    PostBodyElement.current.value=""
    reactionsElement.current.value=""
    tagsElement.current.value=""

    setSelectedTab("home")
    addpost(userId,PostTitle,PostBody,reactions,tags)
  }
  return (
    <>
      <form className='create-post' onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your userId here</label>
    <input type="text" ref={userIdElement} placeholder="Your user Id" className="form-control" id="userId" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" placeholder="What's new today" ref={PostTitleElement} className="form-control" id="title" />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows={4} type="text" ref={PostBodyElement} placeholder='How are you feeling today...' className="form-control" id="body" />
  </div>
  <div className="mb-3">
  <label htmlFor="reactions" className="form-label">Number of reactions</label>
    <input type="text" placeholder="How many people reacted on this post" ref={reactionsElement} className="form-control" id="reactions" />
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" placeholder="Please enter tags using space" ref={tagsElement} className="form-control" id="tags" />
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
  )
}
