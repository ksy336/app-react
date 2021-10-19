import React from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>List of posts</h1>
            {posts.map((post, index) => {
                return <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            })
            }
        </div>
    );
};

export default PostsList;