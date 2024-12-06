import { createContext, useReducer } from "react";

const Defaultvalue = {
    postList: [],
    addpost: () => { },
    deletepost: () => { }
}
export const PostList = createContext(Defaultvalue);
const postListreducer = (currPostList, action) => {
    let myPost = currPostList
    if (action.type === 'DELETE_POST') {
        myPost = currPostList.filter((postList) => postList.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_POST') {
        myPost = [action.payload, ...currPostList ]
    }
    return myPost
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListreducer,[])
    const addpost = (userId, PostTitle, PostBody, reactions, tags) => {
        // console.log(`${userId} ${PostTitle} ${PostBody} ${reactions} ${tags}`)
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: PostTitle,
                body: PostBody,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        })
    }
    const deletepost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })
    }
    return (
        <PostList.Provider value={{
            postList,
            addpost, deletepost
        }}>
            {children}
        </PostList.Provider>
    )
}
export default PostListProvider;