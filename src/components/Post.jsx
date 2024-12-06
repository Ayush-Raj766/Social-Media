import React, { useContext } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { PostList } from '../store/Post-List';
export default function Post({ post }) {
  const {deletepost}=useContext(PostList)
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
      <label htmlFor="userId" className="form-label userid">{post.userId}</label>
        <div className="card-body">
          <h5 className="card-title">{post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(post.id)}>
              <RiDeleteBin5Fill />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map(tags => <span key={tags} className="badge text-bg-primary hastag">{tags}</span>)}
          {/* <div className="alert alert-success reaction" role="alert">
            A simple success alert—check it out!
          </div> */}
          <div className="react">
          <span className=" top-0  translate-middle badge rounded-pill bg-success like">
    {post.reactions}
    <span className="visually-hidden">unread messages</span>
  </span>
            <button type="button" className="btn btn-outline-primary reaction">
            
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="148 122 1000 1000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
            <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z">
            </path>
            </svg>
            

            </button>
          </div>
        </div>
      </div >
    </>
  )
}
