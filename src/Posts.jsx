import { use } from "react"
import Post from "./Post"

export default function Posts ({ postPromise }) {

    const posts = use(postPromise)
    return(
        <div className="card">
            <h1>All post are here : {posts.length}</h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}